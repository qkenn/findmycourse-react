import { useContext } from 'react';
import subjects from '../../lib/data/subjects.json';
import universities from '../../lib/data/universities.json';
import { ProgrammeContext } from '../pages/HomePage';
import { createFilterProps } from '../../lib/utils/createFilterProps';
import FiltersResetBtn from './FiltersResetBtn';
import FilterSelectBtn from './FilterSelectBtn';

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
  const universitiesCount = universityIds.length;
  const subjectsCount = subjectIds.length;

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
        {(universitiesCount > 0 || subjectsCount > 0) && (
          <FiltersResetBtn
            universitiesCount={universitiesCount}
            subjectsCount={subjectsCount}
          />
        )}
      </div>

      <div className="mt-5 flex flex-col gap-5">
        <FilterSelectBtn props={filterProps.university} />
        <FilterSelectBtn props={filterProps.subject} />
      </div>
    </section>
  );
}
