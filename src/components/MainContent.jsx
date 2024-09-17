import { Filters } from './Filters';
import { ProgrammesList } from './ProgrammesList';

export function MainContent() {
  return (
    <main className="my-10 px-5">
      <div className="mx-auto grid max-w-[62.5rem] grid-cols-12 gap-10">
        <Filters />
        <ProgrammesList />
      </div>
    </main>
  );
}
