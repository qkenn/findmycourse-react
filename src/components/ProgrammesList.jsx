import { Link } from 'react-router-dom';

export function ProgrammesList({ courses, searchError, isLoading }) {
  return (
    <ul className="col-span-8 flex flex-col gap-10">
      {courses &&
        courses.map((p) => (
          <li key={p.id} className="rounded-sm bg-white p-7">
            <div>
              <h3 className="text-lg">
                <Link to={`explore/programmes`}>
                  <strong>{p.name}</strong>
                </Link>
              </h3>
              <Link to={`explore/universities`}>{p.university?.name}</Link>

              <div className="mt-5">
                <div>Course: {p.course?.name}</div>
                <div>Duration: {p.duration}</div>
                <div>Medium: {p.medium}</div>
              </div>
            </div>
          </li>
        ))}

      {searchError && <p>Not found</p>}
      {isLoading && <p>Loading...</p>}
    </ul>
  );
}
