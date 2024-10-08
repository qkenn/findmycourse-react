import { createContext, useReducer, useState } from 'react';
import { Hero } from '../components/Hero';
import { programmesReducer } from '../reducers/programmesReducer';
import { FiltersReducer } from '../reducers/filtersReducer';
import { searchProgrammes } from '../utils/searchProgrammes';
import Features from '../components/Features';
import FilterableSearchResults from '../components/FiltarableSearchResults';

export const ProgrammeContext = createContext();

export default function HomePage() {
  const [programmes, programmesDispatch] = useReducer(programmesReducer, {});
  const [filters, filtersDispatch] = useReducer(FiltersReducer, {
    universityIds: [],
    subjectIds: [],
  });
  const [reveal, setReveal] = useState(false);

  return (
    <>
      <ProgrammeContext.Provider
        value={{
          programmes,
          programmesDispatch,
          searchProgrammes,
          filtersDispatch,
          filters,
          revealSearchResults: () => {
            if (!reveal) {
              setReveal(true);
            }
          },
        }}
      >
        <Hero />

        {reveal && <FilterableSearchResults />}
      </ProgrammeContext.Provider>

      <Features />
    </>
  );
}
