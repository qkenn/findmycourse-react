import { useState, createContext, useReducer, useMemo } from 'react';
import { Hero } from '../components/Hero';
import { Filters } from '../components/Filters';
import { HomeProgrammes } from '../components/HomeProgrammes';

export const ProgrammeContext = createContext();

function programmesReducer(programmes, { type, payload }) {
  switch (type) {
    case 'SEARCH_START':
      return {
        isLoading: true,
      };
    case 'SEARCH_SUCCESS':
      return {
        isLoading: false,
        data: payload.data,
      };
    case 'SEARCH_ERROR':
      return {
        isLoading: false,
        searchError: payload.error,
      };
    default:
      return programmes;
  }
}

export function HomePage() {
  const [universityFilter, setUniversityFilter] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('');
  const [programmes, dispatch] = useReducer(programmesReducer, {});

  function searchProgrammes(e, q) {
    e.preventDefault();

    dispatch({ type: 'SEARCH_START' });

    fetch('http://localhost:8080/api/search?' + new URLSearchParams({ q }), {
      mode: 'cors',
    })
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
        dispatch({ type: 'SEARCH_SUCCESS', payload: { data } });
      })
      .catch((e) => {
        dispatch({ type: 'SEARCH_ERROR', payload: { error: e.message } });
      });
  }

  const filteredCourses = useMemo(() => {
    if (!programmes.data) return;

    let programmesClone = [...programmes.data];

    if (universityFilter && universityFilter !== 'All') {
      programmesClone = programmesClone.filter((programme) =>
        programme.university?.name
          .toLowerCase()
          .includes(universityFilter.toLowerCase())
      );
    }

    if (subjectFilter && subjectFilter !== 'All') {
      programmesClone = programmesClone.filter(
        (programme) =>
          programme.course?.subject?.name.toLowerCase() ===
          subjectFilter.toLowerCase()
      );
    }

    return programmesClone;
  }, [programmes.data, subjectFilter, universityFilter]);

  return (
    <>
      <Hero searchProgrammes={searchProgrammes} />
      <ProgrammeContext.Provider
        value={{
          programmes,
          filterBySubject: (filter) => setSubjectFilter(filter),
          filterByUniversity: (filter) => setUniversityFilter(filter),
          filteredCourses,
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
