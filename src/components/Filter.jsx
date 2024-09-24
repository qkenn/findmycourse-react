import { createContext, useState } from 'react';
import FilterOverlay from './FilterOverlay';

export const FilterContext = createContext();

export function Filter({ options, title, filter }) {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <FilterContext.Provider
      value={{
        options,
        title,
        filter,
        closeOverlay: () => setShowOverlay(false),
      }}
    >
      <div className="relative">
        <h4 className="text-sm">{title}</h4>
        <button
          className="mt-2 block w-full border-[1px] border-neutral-600/50 px-3 py-1 text-start"
          onClick={() => setShowOverlay(true)}
        >
          {`Select ${title}`}
        </button>
        {showOverlay && <FilterOverlay />}
        <img
          src="/arrow_down-black-87.svg"
          className="pointer-events-none absolute right-4 top-8"
        />
      </div>
    </FilterContext.Provider>
  );
}
