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

      <form
        className="mt-5 flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <Filter
          type="University"
          defaultOption="All Universities"
          filterHandler={filterByUniversity}
          options={universities}
        />

        <Filter
          type="Subject"
          defaultOption="All Subjects"
          filterHandler={filterBySubject}
          options={subjects}
        />
      </form>
    </section>
  );
}
