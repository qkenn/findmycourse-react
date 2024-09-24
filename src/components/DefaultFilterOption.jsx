import { useContext } from 'react';
import { ProgrammeContext } from '../pages/HomePage';
import Checkbox from './Checkbox';
import { FilterContext } from './Filter';

export default function DefaultFilterOption({
  handleDefaultOption,
  defaultOptionSelected,
}) {
  const { searchProgrammes, programmes, programmesDispatch } =
    useContext(ProgrammeContext);
  const { title, filter } = useContext(FilterContext);

  return (
    <li
      onClick={() => {
        handleDefaultOption();
        filter.reset();
        searchProgrammes(programmesDispatch, programmes.query);
      }}
      className={`flex cursor-pointer gap-3 p-2 ${defaultOptionSelected && 'bg-neutral-100'}`}
    >
      {defaultOptionSelected ? (
        <Checkbox checked={true} />
      ) : (
        <Checkbox checked={false} />
      )}

      <span>{`All ${title}s`}</span>
    </li>
  );
}
