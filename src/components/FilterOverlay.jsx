import { useContext, useState } from 'react';
import DefaultFilterOption from './DefaultFilterOption';
import FilterOption from './FilterOption';
import OverlayCloseBtn from './OverlayCloseBtn';
import { FilterContext } from './Filter';

export default function FilterOverlay() {
  const [defaultOptionSelected, setDefaultOptionSelected] = useState(false);
  const { title, options } = useContext(FilterContext);

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-neutral-700 bg-opacity-50 p-10">
      <div className="max-h-[85dvh] max-w-[40rem] overflow-auto bg-white p-12">
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <OverlayCloseBtn />
        </div>

        <ul className="mt-5 flex flex-col divide-y">
          <DefaultFilterOption
            handleDefaultOption={() => setDefaultOptionSelected((r) => !r)}
            defaultOptionSelected={defaultOptionSelected}
          />
          {options.map((option) => (
            <FilterOption
              key={option.id}
              {...option}
              handleDefaultOption={() => setDefaultOptionSelected(false)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
