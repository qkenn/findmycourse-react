import subjects from '../data/subjects.json';
import universities from '../data/universities.json';

export function Filters({ filterByUniversity, filterBySubject }) {
  return (
    <div className="col-span-4 self-start rounded-sm bg-slate-100 p-7">
      <h3 className="text-2xl font-semibold">Filters</h3>

      <div className="mt-5 flex flex-col gap-4">
        <label className="relative">
          University
          <select
            name="university"
            className="mt-2 w-full appearance-none bg-white px-4 py-2"
            onChange={(e) => filterByUniversity(e.target.value)}
          >
            <option value="All">All Universities</option>
            {universities.map((u) => (
              <option key={u.id} value={u.name}>
                {u.name}
              </option>
            ))}
          </select>
          <img
            src="/arrow_down-black-87.svg"
            className="pointer-events-none absolute right-4 top-10"
          />
        </label>

        <label className="relative">
          Subject
          <select
            name="subject"
            className="mt-2 w-full appearance-none bg-white px-4 py-2"
            onChange={(e) => filterBySubject(e.target.value)}
          >
            <option value="All">All Subjects</option>
            {subjects.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
          <img
            src="/arrow_down-black-87.svg"
            className="pointer-events-none absolute right-4 top-10"
          />
        </label>
      </div>
    </div>
  );
}
