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
    <section className="col-span-4 self-start rounded-sm bg-white p-7">
      <h3 className="text-2xl font-semibold">Filters</h3>

      <div className="mt-5 flex flex-col gap-4">
        <Filter
          title="University"
          options={universities}
          filter={filterProps.university}
        />

        <Filter
          title="Subject"
          options={subjects}
          filter={filterProps.subject}
        />
      </div>
    </section>
  );
}
