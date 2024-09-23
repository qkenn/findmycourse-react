import { useState, createContext, useReducer } from 'react';
import { Hero } from '../components/Hero';
import { Filters } from '../components/Filters';
import { HomeProgrammes } from '../components/HomeProgrammes';

export const ProgrammeContext = createContext();

//
function programmesReducer(programmes, { type, payload }) {
  switch (type) {
    case 'SEARCH_START':
      return {
        isLoading: true,
      };
    case 'SEARCH_SUCCESS':
      console.log(payload.data);

      return {
        query: payload.q,
        isLoading: false,
        results: payload.data.programmes,
        count: payload.data.count,
        pageSize: payload.data.pageSize,
        page: payload.data.page,
      };
    case 'SEARCH_ERROR':
      return {
        isLoading: false,
        searchError: payload.error,
        query: payload.q,
      };
    default:
      return programmes;
  }
}

export function HomePage() {
  const [programmes, dispatch] = useReducer(programmesReducer, {});
  const [subjectFilter, setSubjectFilter] = useState([]);
  const [universityFilter, setUniversityFilter] = useState([]);

  console.log(universityFilter);

  function filter(type, id) {
    const updatedUniversityIds = universityFilter.includes(id)
      ? universityFilter.filter((f) => f !== id)
      : [...universityFilter, id];

    if (type === 'university') {
      setUniversityFilter(updatedUniversityIds);

      searchDB(programmes.query, 1, updatedUniversityIds);
    }
  }

  function handleSearch(e, q) {
    e.preventDefault();

    searchDB(q);
  }

  function searchDB(q, page = 1, university = []) {
    dispatch({ type: 'SEARCH_START' });

    fetch(
      'http://localhost:8080/api/search?' +
        new URLSearchParams({ q, page, university }),
      {
        mode: 'cors',
      }
    )
      .then((res) => {
        if (res.status >= 400) {
          switch (true) {
            case res.status === 404:
              throw new Error('No Match');
            case res.status >= 400 && res.status < 500:
              throw new Error('Client Error');
            case res.status >= 500 && res.status < 600:
              throw new Error('Server Error');
            default:
              throw new Error('Something went wrong');
          }
        }

        return res.json();
      })
      .then((data) => {
        dispatch({ type: 'SEARCH_SUCCESS', payload: { data, q } });
      })
      .catch((e) => {
        dispatch({ type: 'SEARCH_ERROR', payload: { error: e.message, q } });
      });
  }

  return (
    <>
      <Hero handleSearch={handleSearch} />
      <ProgrammeContext.Provider
        value={{
          programmes,
          searchDB,
          filter,
          universityFilter,
          resetFilters: () => setUniversityFilter([]),
        }}
      >
        <main className="my-10 px-5">
          <div className="mx-auto grid max-w-[62.5rem] grid-cols-12 gap-10">
            <Filters />
            <HomeProgrammes />
          </div>
        </main>
      </ProgrammeContext.Provider>
    </>
  );
}
