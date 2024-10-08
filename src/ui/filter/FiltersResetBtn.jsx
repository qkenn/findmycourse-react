import { useContext } from 'react';
import { ProgrammeContext } from '../pages/HomePage';

export default function FiltersResetBtn({ universitiesCount, subjectsCount }) {
  const { filtersDispatch, searchProgrammes, programmesDispatch, programmes } =
    useContext(ProgrammeContext);

  return (
    <button
      onClick={() => {
        filtersDispatch({ type: 'RESET_ALL' });
        searchProgrammes(programmesDispatch, programmes.query);
      }}
      className="font-semibold text-red-700"
    >
      Reset{' '}
      {(universitiesCount > 0 || subjectsCount > 0) &&
        `(${universitiesCount + subjectsCount})`}
    </button>
  );
}
