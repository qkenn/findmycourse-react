import { createContext, useState } from 'react';
import FilterOverlay from './FilterOverlay';

export const FilterContext = createContext();

export default function FilterSelectBtn({
  props: {
    title,
    ids,
    options,
    reset,
    selected,
    dispatch,
    research,
    defaultOptionText,
  },
}) {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <FilterContext.Provider
      value={{
        options,
        title,
        defaultOptionText,
        reset,
        selected,
        dispatch,
        research,
        closeOverlay: () => setShowOverlay(false),
      }}
    >
      <div>
        <h4 className="text-sm">
          <span>{title}</span>
          {ids.length > 0 && (
            <span className="ml-1 inline-block">({ids.length})</span>
          )}
        </h4>
        <button
          className="relative mt-2 block w-full border-[1px] border-neutral-600/50 px-3 py-1 text-start"
          onClick={() => setShowOverlay(true)}
        >
          {`Select ${title}`}
          <div className="pointer-events-none absolute right-4 top-1 bg-white pl-1">
            <img src="/arrow_down-black-87.svg" />
          </div>
        </button>
      </div>
      {showOverlay && <FilterOverlay />}
    </FilterContext.Provider>
  );
}
