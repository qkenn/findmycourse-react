import { useContext, useRef } from 'react';
import { ProgrammeContext } from '../pages/HomePage';

export function Hero() {
  const searchInputRef = useRef(null);
  const { searchProgrammes, programmesDispatch } = useContext(ProgrammeContext);

  return (
    <div className="bg-white">
      <div className="mx-auto flex min-h-[55vh] max-w-main flex-col justify-center">
        <h1 className="text-center text-[2.8rem] font-semibold">
          Search for degree programmes
        </h1>
        <form
          className="mx-auto mt-10 flex items-center"
          onSubmit={(e) => {
            e.preventDefault();
            searchProgrammes(programmesDispatch, searchInputRef.current.value);
          }}
          autoComplete="off"
        >
          <label className="w-[30rem]">
            <span className="text-sm">Courses and programmes</span>
            <div className="relative">
              <input
                autoFocus
                type="text"
                name="q"
                placeholder="Keywords e.g subject/programme name/location"
                className="mt-1 w-full rounded-sm border-[1px] border-neutral-600/50 px-5 py-2 pl-12 placeholder:text-neutral-400"
                ref={searchInputRef}
              />
              <img
                className="absolute left-4 top-[1.45rem] -translate-y-1/2 transform"
                src="/search_black_24dp.svg"
              />
            </div>
          </label>

          <button className="ml-5 self-end rounded-sm border-[1px] border-neutral-950 bg-neutral-950 px-8 py-2 text-white transition-colors focus:bg-neutral-700 focus:outline-none">
            Find
          </button>
        </form>
      </div>
    </div>
  );
}
