import { createContext, useReducer, useState } from 'react';
import { Hero } from '../home/Hero';
import { programmesReducer } from '../../lib/reducers/programmesReducer';
import { FiltersReducer } from '../../lib/reducers/filtersReducer';
import { searchProgrammes } from '../../lib/utils/searchProgrammes';
import Features from '../home/Features';
import FilterableSearchResults from '../home/FiltarableSearchResults';

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
