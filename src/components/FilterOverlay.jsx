import { useState } from 'react';
import DefaultFilterOption from './DefaultFilterOption';
import FilterOption from './FilterOption';

export default function FilterOverlay({
  options,
  closeOverlay,
  title,
  filter,
}) {
  const [resetSelected, setResetSelected] = useState(false);

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-neutral-700 bg-opacity-50 p-10">
      <div className="max-h-[85dvh] max-w-[40rem] overflow-auto bg-white p-12">
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <button
            onClick={closeOverlay}
            className="flex items-center justify-center rounded-sm bg-neutral-950 p-1"
          >
            <svg width="25" height="25" style={{ fill: '#fff' }}>
              <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
            </svg>
          </button>
        </div>
        <ul className="mt-5 flex flex-col divide-y">
          <DefaultFilterOption
            handleReset={() => setResetSelected((r) => !r)}
            resetSelected={resetSelected}
            resetFilter={filter.reset}
            title={title}
          />
          {options.map((option) => (
            <FilterOption
              key={option.id}
              {...option}
              handleReset={() => setResetSelected(false)}
              filter={filter}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
