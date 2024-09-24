import { createContext, useEffect, useReducer, useState } from 'react';
import { Hero } from '../components/Hero';
import { programmesReducer } from '../reducers/programmesReducer';
import { FiltersReducer } from '../reducers/filtersReducer';
import { searchProgrammes } from '../utils/searchProgrammes';
import ProgrammesGrid from '../components/ProgrammesGrid';
import GeneralInfo from '../components/GeneralInfo';

export const ProgrammeContext = createContext();

export function HomePage() {
  const [programmes, programmesDispatch] = useReducer(programmesReducer, {});
  const [filters, filtersDispatch] = useReducer(FiltersReducer, {
    universityIds: [],
    subjectIds: [],
  });
  const [initialized, setInitialized] = useState(false);

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
        <Hero
          initialize={() => {
            if (!initialized) {
              setInitialized(true);
            }
          }}
        />

        {initialized && <ProgrammesGrid />}
      </ProgrammeContext.Provider>

      <GeneralInfo />
    </>
  );
}
