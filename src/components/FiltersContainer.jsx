import { useContext } from 'react';
import subjects from '../data/subjects.json';
import universities from '../data/universities.json';
import { Filter } from './Filter';
import { ProgrammeContext } from '../pages/HomePage';
import { createFilterProps } from '../utils/createFilterProps';

export function FiltersContainer() {
  const {
    filters,
    filtersDispatch,
    searchProgrammes,
    programmesDispatch,
    programmes,
  } = useContext(ProgrammeContext);

  const universityIds = filters.universityIds;
  const subjectIds = filters.subjectIds;

  const filterProps = {
    university: createFilterProps({
      ids: universityIds,
      title: 'University',
      defaultOptionText: 'All Universities',
      options: universities,
      dispatchType: 'UNI_FILTER',
      resetType: 'UNI_RESET',
      searchFunction: searchProgrammes,
      query: programmes.query,
      otherIds: subjectIds,
      filtersDispatch,
      programmesDispatch,
    }),
    subject: createFilterProps({
      ids: subjectIds,
      title: 'Subject',
      defaultOptionText: 'All Subjects',
      options: subjects,
      dispatchType: 'SUBJECT_FILTER',
      resetType: 'SUBJECT_RESET',
      searchFunction: searchProgrammes,
      query: programmes.query,
      otherIds: universityIds,
      filtersDispatch,
      programmesDispatch,
    }),
  };

  return (
    <section className="rounded-sm bg-white p-10 md:col-span-4 md:self-start md:p-8">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">Filters</h3>
        {(universityIds.length > 0 || subjectIds.length > 0) && (
          <button
            onClick={() => {
              filtersDispatch({ type: 'RESET_ALL' });
              searchProgrammes(programmesDispatch, programmes.query);
            }}
            className="font-semibold text-red-700"
          >
            Reset{' '}
            {(universityIds.length > 0 || subjectIds.length > 0) &&
              `(${universityIds.length + subjectIds.length})`}
          </button>
        )}
      </div>

      <div className="mt-5 flex flex-col gap-5">
        <Filter props={filterProps.university} />

        <Filter props={filterProps.subject} />
      </div>
    </section>
  );
}
