import { useContext } from 'react';
import { ProgrammeContext } from '../pages/HomePage';
import { HomeProgrammeCard } from './HomeProgrammeCard';

export function HomeProgrammes() {
  const { programmes, filteredCourses } = useContext(ProgrammeContext);

  return (
    <ul className="col-span-8 flex flex-col gap-10">
      {filteredCourses &&
        filteredCourses.map((p) => <HomeProgrammeCard key={p.id} {...p} />)}

      {programmes.searchError && <p>{programmes.searchError}</p>}
      {programmes.isLoading && <p>Loading...</p>}
    </ul>
  );
}
