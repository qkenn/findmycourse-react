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
      <div className="max-h-[85dvh] max-w-[40rem] overflow-auto bg-white px-16 py-14">
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <button onClick={closeOverlay}>closeOverlay</button>
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
