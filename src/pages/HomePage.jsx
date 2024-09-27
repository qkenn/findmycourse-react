import { createContext, useEffect, useReducer, useState } from 'react';
import { Hero } from '../components/Hero';
import { programmesReducer } from '../reducers/programmesReducer';
import { FiltersReducer } from '../reducers/filtersReducer';
import { searchProgrammes } from '../utils/searchProgrammes';
import ProgrammesGrid from '../components/ProgrammesGrid';
import InfoSection from '../components/InfoSection';

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
          initialize: () => {
            if (!initialized) {
              setInitialized(true);
            }
          },
        }}
      >
        <Hero />

        {initialized && <ProgrammesGrid />}
      </ProgrammeContext.Provider>

      <InfoSection />
    </>
  );
}
