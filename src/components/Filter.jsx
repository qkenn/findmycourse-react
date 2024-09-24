import { useState } from 'react';
import FilterOverlay from './FilterOverlay';

export function Filter({ options, title, filter }) {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="relative">
      <h4 className="text-sm">{title}</h4>
      <button
        className="mt-2 block w-full border-[1px] border-neutral-700 px-3 py-1 text-start"
        onClick={() => setShowOverlay(true)}
      >
        {`Select ${title}`}
      </button>
      {showOverlay && (
        <FilterOverlay
          filter={filter}
          closeOverlay={() => setShowOverlay(false)}
          title={title}
          options={options}
        />
      )}
      <img
        src="/arrow_down-black-87.svg"
        className="pointer-events-none absolute right-4 top-8"
      />
    </div>
  );
}
