import { useContext } from 'react';
import subjects from '../data/subjects.json';
import universities from '../data/universities.json';
import { Filter } from './Filter';
import { ProgrammeContext } from '../pages/HomePage';

export function FiltersContainer() {
  const {
    filters,
    filtersDispatch,
    searchProgrammes,
    programmesDispatch,
    programmes,
  } = useContext(ProgrammeContext);

  const filterProps = {
    university: {
      selected: (id) => filters.universityIds.includes(id),
      dispatch: (id) =>
        filtersDispatch({ type: 'UNI_FILTER', payload: { id: id } }),

      reset: () => filtersDispatch({ type: 'UNI_RESET' }),
      research: (id) => {
        searchProgrammes(
          programmesDispatch,
          programmes.query,
          1,
          filters.universityIds.includes(id)
            ? filters.universityIds.filter((f) => f !== id)
            : [...filters.universityIds, id],
          filters.subjectIds
        );
      },
    },

    subject: {
      selected: (id) => filters.subjectIds.includes(id),
      dispatch: (id) =>
        filtersDispatch({ type: 'SUBJECT_FILTER', payload: { id: id } }),

      reset: () => filtersDispatch({ type: 'SUBJECT_RESET' }),
      research: (id) => {
        searchProgrammes(
          programmesDispatch,
          programmes.query,
          1,
          filters.universityIds,
          filters.subjectIds.includes(id)
            ? filters.subjectIds.filter((f) => f !== id)
            : [...filters.subjectIds, id]
        );
      },
    },
  };

  return (
    <section className="rounded-sm bg-white p-7 md:col-span-4 md:self-start">
      <div className="flex justify-between">
        <h3 className="text-2xl font-semibold">Filters</h3>
        {(filters.universityIds.length > 0 ||
          filters.subjectIds.length > 0) && (
          <button
            onClick={() => {
              filtersDispatch({ type: 'RESET_ALL' });
              searchProgrammes(programmesDispatch, programmes.query);
            }}
            className="rounded-sm bg-neutral-900 px-5 py-2 text-white"
          >
            Reset
          </button>
        )}
      </div>

      <div className="mt-5 flex flex-col gap-4">
        <Filter
          title="University"
          defaultOptionText="All Universities"
          options={universities}
          filter={filterProps.university}
          filterCount={filters.universityIds.length}
        />

        <Filter
          title="Subject"
          defaultOptionText="All Subjects"
          options={subjects}
          filter={filterProps.subject}
          filterCount={filters.subjectIds.length}
        />
      </div>
    </section>
  );
}
