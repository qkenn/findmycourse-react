import subjects from '../data/subjects.json';
import universities from '../data/universities.json';

export function Filters({ filterByUniversity, filterBySubject }) {
  return (
    <div className="col-span-4 self-start rounded-sm bg-slate-100 p-3">
      <h3 className="text-2xl font-semibold">Filters</h3>

      <div className="mt-5 flex flex-col gap-2">
        <h4 className="text-sm">University and Subject</h4>
        <div className="relative">
          <img
            src="/arrow_down-black-87.svg"
            className="pointer-events-none absolute right-4 top-[1.3rem] -translate-y-1/2 transform"
          />
          <select
            name="university"
            className="w-full appearance-none bg-white px-4 py-2"
            onChange={(e) => filterByUniversity(e.target.value)}
          >
            <option value="All">All Universities</option>
            {universities.map((u) => (
              <option key={u.id} value={u.name}>
                {u.name}
              </option>
            ))}
          </select>
        </div>

        <div className="relative">
          <img
            src="/arrow_down-black-87.svg"
            className="pointer-events-none absolute right-4 top-[1.3rem] -translate-y-1/2 transform"
          />

          <select
            name="subject"
            className="w-full appearance-none bg-white px-4 py-2"
            onChange={(e) => filterBySubject(e.target.value)}
          >
            <option value="All">All Subjects</option>
            {subjects.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
