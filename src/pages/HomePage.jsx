import { createContext, useReducer, useState } from 'react';
import { Hero } from '../components/Hero';
import { programmesReducer } from '../reducers/programmesReducer';
import { FiltersReducer } from '../reducers/filtersReducer';
import { searchProgrammes } from '../utils/searchProgrammes';
import ProgrammesGrid from '../components/ProgrammesGrid';
import Features from '../components/Features';

export const ProgrammeContext = createContext();

export default function HomePage() {
  const [programmes, programmesDispatch] = useReducer(programmesReducer, {});
  const [filters, filtersDispatch] = useReducer(FiltersReducer, {
    universityIds: [],
    subjectIds: [],
  });
  const [initialized, setInitialized] = useState(false);

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

      <Features />
    </>
  );
}
