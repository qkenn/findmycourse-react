import { createContext, useEffect, useReducer } from 'react';
import { Hero } from '../components/Hero';
import { Filters } from '../components/Filters';
import { HomeProgrammes } from '../components/HomeProgrammes';
import { programmesReducer } from '../reducers/programmesReducer';
import { FiltersReducer } from '../reducers/filtersReducer';
import { searchProgrammes } from '../utils/searchProgrammes';

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
