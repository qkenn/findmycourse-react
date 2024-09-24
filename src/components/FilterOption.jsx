import { useContext } from 'react';
import Checkbox from './Checkbox';
import { FilterContext } from './Filter';

export default function FilterOption({ name, id, handleDefaultOption }) {
  const { filter } = useContext(FilterContext);

  return (
    <li
      value={name}
      className={`flex cursor-pointer items-center gap-3 p-2 ${filter.selected(id) && 'bg-neutral-100'}`}
      onClick={() => {
        handleDefaultOption();
        filter.dispatch(id);
        filter.research(id);
      }}
    >
      {filter.selected(id) ? (
        <Checkbox checked={true} />
      ) : (
        <Checkbox checked={false} />
      )}
      <span>{name}</span>
    </li>
  );
}
