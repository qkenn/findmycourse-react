import { FiltersContainer } from './FiltersContainer';
import { HomeProgrammes } from './HomeProgrammes';

export default function ProgrammesGrid() {
  return (
    <main className="my-10 px-5">
      <div className="mx-auto grid max-w-[62.5rem] grid-cols-12 gap-10">
        <FiltersContainer />
        <HomeProgrammes />
      </div>
    </main>
  );
}
