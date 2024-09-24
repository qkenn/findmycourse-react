import { useContext } from 'react';
import { ProgrammeContext } from '../pages/HomePage';
import Checkbox from './Checkbox';

export default function DefaultFilterOption({
  handleReset,
  resetSelected,
  resetFilter,
  title,
}) {
  const { searchProgrammes, programmes } = useContext(ProgrammeContext);

  return (
    <li
      onClick={() => {
        handleReset();
        resetFilter();
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
  );
}
