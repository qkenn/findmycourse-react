import { useContext } from 'react';
import { FiltersContainer } from './FiltersContainer';
import { HomeProgrammes } from './HomeProgrammes';
import { ProgrammeContext } from '../pages/HomePage';
import PaginationInfo from './PaginationInfo';

export default function ProgrammesGrid() {
  const { programmes } = useContext(ProgrammeContext);

  return (
    <main className="my-10 px-5">
      <section className="mx-auto max-w-[62.5rem]">
        {programmes.results && <PaginationInfo />}

        <div className="mt-3 flex flex-col gap-10 md:grid md:grid-cols-12 md:gap-10">
          <FiltersContainer />
          <HomeProgrammes />
        </div>
      </section>
    </main>
  );
}
