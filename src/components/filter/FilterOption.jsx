import { useContext } from 'react';
import { FilterContext } from './FilterSelectBtn';
import Checkbox from './Checkbox';

export default function FilterOption({ name, id, handleDefaultOption }) {
  const { selected, dispatch, research } = useContext(FilterContext);

  return (
    <li
      value={name}
      className={`flex cursor-pointer items-center gap-3 p-2 ${selected(id) && 'bg-neutral-100'}`}
      onClick={() => {
        handleDefaultOption();
        dispatch(id);
        research(id);
      }}
    >
      {selected(id) ? (
        <Checkbox checked={true} />
      ) : (
        <Checkbox checked={false} />
      )}
      <span>{name}</span>
    </li>
  );
}
