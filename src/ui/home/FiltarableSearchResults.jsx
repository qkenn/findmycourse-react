import { useContext } from 'react';
import { ResultsDetails } from './Pagination';
import SearchResultsContainer from './SearchResultsContainer';
import { FiltersContainer } from '../filter/FiltersContainer';
import { ProgrammeContext } from '../pages/HomePage';
import { CenteredContainer } from '../Containers';

export default function FilterableSearchResults() {
  const { programmes } = useContext(ProgrammeContext);

  return (
    <main>
      <CenteredContainer home={true}>
        {programmes.results && <ResultsDetails />}

        <div className="mt-3 flex flex-col gap-10 md:grid md:grid-cols-12 md:gap-10">
          <FiltersContainer />
          <SearchResultsContainer />
        </div>
      </CenteredContainer>
    </main>
  );
}
