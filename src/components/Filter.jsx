export function Filter({ type, defaultOption, filterHandler, options }) {
  return (
    <label className="relative">
      {type}
      <select
        name="university"
        className="mt-2 w-full appearance-none px-4 py-2"
        onChange={(e) => filterHandler(e.target.value)}
      >
        <option value="All">{defaultOption}</option>
        {options.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      <img
        src="/arrow_down-black-87.svg"
        className="pointer-events-none absolute right-4 top-10"
      />
    </label>
  );
}
