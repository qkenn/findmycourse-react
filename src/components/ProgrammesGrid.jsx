import { useContext } from 'react';
import { FiltersContainer } from './filter/FiltersContainer';
import { HomeProgrammes } from './HomeProgrammes';
import { ProgrammeContext } from '../pages/HomePage';
import { PaginatedResultsDetails } from './Pagination';
import { CenteredContainer } from './Containers';

export default function ProgrammesGrid() {
  const { programmes } = useContext(ProgrammeContext);

  return (
    <main>
      <CenteredContainer home={true}>
        {programmes.results && <PaginatedResultsDetails />}

        <div className="mt-3 flex flex-col gap-10 md:grid md:grid-cols-12 md:gap-10">
          <FiltersContainer />
          <HomeProgrammes />
        </div>
      </CenteredContainer>
    </main>
  );
}
