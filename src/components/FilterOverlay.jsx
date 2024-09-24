import { useState, useContext } from 'react';
import Checkbox from './Checkbox';
import { ProgrammeContext } from '../pages/HomePage';

export default function FilterOverlay({
  options,
  closeOverlay,
  title,
  filter,
}) {
  const [resetSelected, setResetSelected] = useState(false);
  const { searchProgrammes, programmes } = useContext(ProgrammeContext);

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
          <li
            onClick={() => {
              setResetSelected((s) => !s);
              filter.reset();
              searchProgrammes(programmes.query);
            }}
            className={`flex cursor-pointer gap-3 p-2 ${resetSelected && 'bg-neutral-100'}`}
          >
            {resetSelected ? (
              <Checkbox checked={true} />
            ) : (
              <Checkbox checked={false} />
            )}

            <span>{`All ${title}s`}</span>
          </li>
          {options.map((e) => (
            <li
              key={e.id}
              value={e.name}
              className={`flex cursor-pointer items-center gap-3 p-2 ${filter.selected(e.id) && 'bg-neutral-100'}`}
              onClick={() => {
                setResetSelected(false);
                filter.dispatch(e.id);
                filter.research(e.id);
              }}
            >
              {filter.selected(e.id) ? (
                <Checkbox checked={true} />
              ) : (
                <Checkbox checked={false} />
              )}
              <span>{e.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
