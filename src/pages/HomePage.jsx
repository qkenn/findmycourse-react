import { createContext, useEffect, useReducer } from 'react';
import { Hero } from '../components/Hero';
import { programmesReducer } from '../reducers/programmesReducer';
import { FiltersReducer } from '../reducers/filtersReducer';
import { searchProgrammes } from '../utils/searchProgrammes';
import ProgrammesGrid from '../components/ProgrammesGrid';

export const ProgrammeContext = createContext();

export function HomePage() {
  const [programmes, programmesDispatch] = useReducer(programmesReducer, {});
  const [filters, filtersDispatch] = useReducer(FiltersReducer, {
    universityIds: [],
    subjectIds: [],
  });

  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <>
      <ProgrammeContext.Provider
        value={{
          programmes,
          programmesDispatch,
          searchProgrammes,
          filtersDispatch,
          filters,
        }}
      >
        <Hero />

        {programmes.results && <ProgrammesGrid />}
      </ProgrammeContext.Provider>
    </>
  );
}
