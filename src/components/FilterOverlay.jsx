import { useState } from 'react';
import DefaultFilterOption from './DefaultFilterOption';
import FilterOption from './FilterOption';
import OverlayCloseBtn from './OverlayCloseBtn';

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
          <OverlayCloseBtn closeOverlay={closeOverlay} />
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
