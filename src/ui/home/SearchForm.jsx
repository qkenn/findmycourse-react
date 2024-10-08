import { useContext, useRef } from 'react';
import { ProgrammeContext } from '../pages/HomePage';

export default function SearchForm() {
  const searchInputRef = useRef(null);

  const { searchProgrammes, programmesDispatch, revealSearchResults } =
    useContext(ProgrammeContext);

  return (
    <form
      className="mt-10 flex flex-col items-center justify-center gap-5 md:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        searchProgrammes(programmesDispatch, searchInputRef.current.value);
        revealSearchResults();
      }}
      autoComplete="off"
    >
      <label className="block">
        <span className="text-sm">Courses and programmes</span>
        <div className="relative">
          <input
            autoFocus
            type="text"
            name="q"
            placeholder="Keywords e.g subject/programme name/location"
            className="mt-1 block w-full rounded-sm border-[1px] border-neutral-600/50 px-5 py-2 pl-12 placeholder:text-neutral-400 sm:w-[32rem]"
            ref={searchInputRef}
          />

          <img
            src="/search-icon.svg"
            className="absolute left-4 top-[1.3rem] -translate-y-1/2 transform"
          />
        </div>
      </label>

      <button className="block rounded-sm bg-neutral-950 px-10 py-2 text-white transition-colors focus:bg-neutral-700 focus:outline-none md:self-end md:px-8">
        Find
      </button>
    </form>
  );
}
