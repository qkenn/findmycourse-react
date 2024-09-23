import { useContext, useState } from 'react';
import { ProgrammeContext } from '../pages/HomePage';

export function Filter({ type, defaultOption, options }) {
  const [showFilter, setShowFilter] = useState(false);
  const {
    filterWithUniversities,
    universityFilter,
    searchDB,
    programmes,
    resetFilters,
    filterWithSubjects,
    subjectFilter,
  } = useContext(ProgrammeContext);
  const [isResetSelected, setIsResetSelected] = useState(false);

  let filter;
  switch (type) {
    case 'university':
      filter = {
        title: 'Unversity',
        defaultFilterText: 'All Universities',
        selected: (id) => universityFilter.includes(id),
        filter: (id) => filterWithUniversities(id),
      };
      break;
    case 'subject':
      filter = {
        title: 'Subject',
        defaultFilterText: 'All Subjects',
        selected: (id) => subjectFilter.includes(id),
        filter: (id) => filterWithSubjects(id),
      };
  }

  return (
    <div className="relative">
      <h4 className="text-sm">{defaultOption}</h4>
      <button
        className="mt-2 block w-full border-[1px] border-neutral-700 px-3 py-1 text-start"
        onClick={() => setShowFilter(true)}
      >
        {defaultOption}
      </button>
      {showFilter && (
        <>
          <div className="fixed inset-0 z-10 flex items-center justify-center bg-neutral-700 bg-opacity-50 p-10">
            <div className="max-h-[85vh] max-w-[40rem] overflow-auto bg-white px-16 py-14">
              <div className="flex justify-between">
                <h3 className="text-2xl font-semibold">{filter.title}</h3>
                <button onClick={() => setShowFilter(false)}>close</button>
              </div>
              <ul className="mt-5 flex flex-col divide-y">
                <li
                  onClick={() => {
                    setIsResetSelected((s) => !s);
                    resetFilters();
                    searchDB(programmes.query);
                  }}
                  className={`cursor-pointer p-2 ${isResetSelected ? 'bg-neutral-100' : null}`}
                >
                  {type === 'university' ? 'All Universities' : 'All Subjects'}
                </li>
                {options.map((e) => (
                  <li
                    key={e.id}
                    value={e.name}
                    className={`cursor-pointer p-2 ${filter.selected(e.id) && 'bg-neutral-100'}`}
                    onClick={() => {
                      setIsResetSelected(false);
                      filter.filter(e.id);
                    }}
                  >
                    {e.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
      <img
        src="/arrow_down-black-87.svg"
        className="pointer-events-none absolute right-4 top-8"
      />
    </div>
  );
}
