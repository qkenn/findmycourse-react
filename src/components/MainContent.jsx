import { Filters } from './Filters';
import { ProgrammesList } from './ProgrammesList';

export function MainContent({
  courses,
  searchError,
  isLoading,
  filterByUniversity,
  filterBySubject,
}) {
  return (
    <main className="mx-auto mt-10 grid max-w-main grid-cols-12 gap-10">
      <Filters
        filterByUniversity={filterByUniversity}
        filterBySubject={filterBySubject}
      />
      <ProgrammesList
        courses={courses}
        searchError={searchError}
        isLoading={isLoading}
      />
    </main>
  );
}
