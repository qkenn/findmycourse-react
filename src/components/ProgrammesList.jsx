import { Link } from 'react-router-dom';

export function ProgrammesList({ courses, searchError, isLoading }) {
  return (
    <ul className="col-span-8 flex flex-col gap-10">
      {courses.map((c) => (
        <li key={c.id} className="bg-slate-100 p-3">
          <div>
            <h3 className="text-lg">
              <Link to={`explore/programmes`}>
                <strong>{c.name}</strong>
              </Link>
            </h3>
            <h4>{c.university?.name}</h4>
          </div>
        </li>
      ))}

      {searchError && <p>Not found</p>}
      {isLoading && <p>Loading...</p>}
    </ul>
  );
}
