import { createContext, useReducer } from 'react';
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

function FiltersReducer(state, { type, payload }) {
  switch (type) {
    case 'SUBJECT_FILTER':
      return {
        ...state,
        subjectIds: state.subjectIds.includes(payload.id)
          ? state.subjectIds.filter((f) => f !== payload.id)
          : [...state.subjectIds, payload.id],
      };

    case 'UNI_FILTER':
      return {
        ...state,
        universityIds: state.universityIds.includes(payload.id)
          ? state.universityIds.filter((f) => f !== payload.id)
          : [...state.universityIds, payload.id],
      };
    case 'SUBJECT_RESET':
      return {
        ...state,
        subjectIds: [],
      };
    case 'UNI_RESET':
      return {
        ...state,
        universityIds: [],
      };
    default:
      return state;
  }
}

export function HomePage() {
  const [programmes, programmesDispatch] = useReducer(programmesReducer, {});
  const [filters, filtersDispatch] = useReducer(FiltersReducer, {
    universityIds: [],
    subjectIds: [],
  });

  function searchProgrammes(q, page = 1, university = [], subject = []) {
    programmesDispatch({ type: 'SEARCH_START' });

    // getting params
    const params = new URLSearchParams({ q, page });
    if (university.length > 0) {
      params.append('university', university.join(','));
    }
    if (subject.length > 0) {
      params.append('subject', subject.join(','));
    }

    fetch('http://localhost:8080/api/search?' + params.toString(), {
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
        programmesDispatch({ type: 'SEARCH_SUCCESS', payload: { data, q } });
      })
      .catch((e) => {
        programmesDispatch({
          type: 'SEARCH_ERROR',
          payload: { error: e.message, q },
        });
      });
  }

  return (
    <>
      <Hero searchProgrammes={searchProgrammes} />
      <ProgrammeContext.Provider
        value={{
          programmes,
          searchProgrammes,
          filtersDispatch,
          filters,
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
