import { useContext, useState } from 'react';
import { ProgrammeContext } from '../pages/HomePage';

export function Filter({ type, defaultOption, options }) {
  const [showFilter, setShowFilter] = useState(false);
  const { filter, universityFilter, searchDB, programmes, resetFilters } =
    useContext(ProgrammeContext);
  const [isResetSelected, setIsResetSelected] = useState(false);

  return (
    <div className="relative">
      <h4 className="text-sm">{type}</h4>
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
                <h3 className="text-2xl font-semibold">{type}</h3>
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
                  All Universities
                </li>
                {options.map((e) => (
                  <li
                    key={e.id}
                    value={e.name}
                    className={`cursor-pointer p-2 ${universityFilter.includes(e.id) ? 'bg-neutral-100' : null}`}
                    onClick={() => {
                      setIsResetSelected(false);
                      filter('university', e.id);
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
