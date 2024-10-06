import { useContext } from 'react';
import { ProgrammeContext } from '../../pages/HomePage';
import Checkbox from './Checkbox';
import { FilterContext } from './FilterSelectBtn';

export default function DefaultFilterOption({
  handleDefaultOption,
  defaultOptionSelected,
}) {
  const { searchProgrammes, programmes, programmesDispatch } =
    useContext(ProgrammeContext);
  const { reset, defaultOptionText } = useContext(FilterContext);

  return (
    <li
      onClick={() => {
        handleDefaultOption();
        reset();
        searchProgrammes(programmesDispatch, programmes.query);
      }}
      className={`flex cursor-pointer gap-3 p-2 ${defaultOptionSelected && 'bg-neutral-100'}`}
    >
      {defaultOptionSelected ? (
        <Checkbox checked={true} />
      ) : (
        <Checkbox checked={false} />
      )}

      <span>{defaultOptionText}</span>
    </li>
  );
}
