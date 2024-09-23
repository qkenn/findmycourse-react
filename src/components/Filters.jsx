import { useContext } from 'react';
import subjects from '../data/subjects.json';
import universities from '../data/universities.json';
import { ProgrammeContext } from '../pages/HomePage';
import { Filter } from './Filter';

export function Filters() {
  const { filterBySubject, filterByUniversity } = useContext(ProgrammeContext);

  return (
    <section className="col-span-4 self-start rounded-sm bg-white p-7">
      <h3 className="text-2xl font-semibold">Filters</h3>

      <div className="mt-5 flex flex-col gap-4">
        <Filter
          type="university"
          defaultOption="Select university"
          filterHandler={filterByUniversity}
          options={universities}
        />

        <Filter
          type="subject"
          defaultOption="Select subject"
          filterHandler={filterBySubject}
          options={subjects}
        />
      </div>
    </section>
  );
}
