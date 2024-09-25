import { useContext, useRef } from 'react';
import { ProgrammeContext } from '../pages/HomePage';

export function Hero({ initialize }) {
  const searchInputRef = useRef(null);
  const { searchProgrammes, programmesDispatch } = useContext(ProgrammeContext);

  return (
    <div className="bg-white">
      <div className="mx-auto flex min-h-[55vh] max-w-main flex-col justify-center px-3">
        <h1 className="text-center text-4xl/tight font-semibold md:text-[2.7rem]">
          Search for degree programmes
        </h1>
        <form
          className="mt-10 md:flex md:items-center md:justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            searchProgrammes(programmesDispatch, searchInputRef.current.value);
            initialize();
          }}
          autoComplete="off"
        >
          <label className="mx-auto block max-w-xl px-5 md:mx-0 md:w-[30rem] md:p-0">
            <span className="text-sm">Courses and programmes</span>
            <div className="relative">
              <input
                autoFocus
                type="text"
                name="q"
                placeholder="Keywords e.g subject/programme name/location"
                className="mt-1 block w-full rounded-sm border-[1px] border-neutral-600/50 px-5 py-2 pl-12 placeholder:text-neutral-400"
                ref={searchInputRef}
              />

              <svg
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
                className="absolute left-4 top-[1.3rem] -translate-y-1/2 transform"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </div>
          </label>

          <button className="mx-auto mt-5 block rounded-sm border-[1px] border-neutral-950 bg-neutral-950 px-8 py-2 text-white transition-colors focus:bg-neutral-700 focus:outline-none md:mx-0 md:ml-5 md:mt-0 md:self-end">
            Find
          </button>
        </form>
      </div>
    </div>
  );
}
