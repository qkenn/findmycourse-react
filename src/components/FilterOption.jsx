import Checkbox from './Checkbox';

export default function FilterOption({ name, id, filter, handleReset }) {
  return (
    <li
      value={name}
      className={`flex cursor-pointer items-center gap-3 p-2 ${filter.selected(id) && 'bg-neutral-100'}`}
      onClick={() => {
        handleReset();
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
