import { useContext, useRef } from 'react';
import { ProgrammeContext } from '../../pages/HomePage';
import SearchInput from './SearchInput';
import SearchBtn from './SearchBtn';

export default function SearchForm() {
  const searchInputRef = useRef(null);

  const { searchProgrammes, programmesDispatch, initialize } =
    useContext(ProgrammeContext);

  return (
    <form
      className="mt-10 flex flex-col items-center justify-center gap-5 md:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        searchProgrammes(programmesDispatch, searchInputRef.current.value);
        initialize();
      }}
      autoComplete="off"
    >
      <label className="block">
        <span className="text-sm">Courses and programmes</span>
        <SearchInput searchInputRef={searchInputRef} />
      </label>

      <SearchBtn />
    </form>
  );
}
