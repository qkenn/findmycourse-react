import { useContext } from 'react';
import { ProgrammeContext } from '../pages/HomePage';
import { ProgrammeCard } from './ProgrammeCard';

export function ProgrammesList() {
  const { programmes, filteredCourses } = useContext(ProgrammeContext);

  return (
    <ul className="col-span-8 flex flex-col gap-10">
      {filteredCourses &&
        filteredCourses.map((p) => <ProgrammeCard key={p.id} p={p} />)}

      {programmes.searchError && <p>{programmes.searchError}</p>}
      {programmes.isLoading && <p>Loading...</p>}
    </ul>
  );
}
