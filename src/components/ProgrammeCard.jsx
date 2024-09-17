import { Link } from 'react-router-dom';

export function ProgrammeCard({ p }) {
  return (
    <li key={p.id} className="rounded-sm bg-white p-7">
      <div>
        <h3 className="text-lg">
          <Link to={`explore/programmes/${p.id}`} className="hover:underline">
            <strong>{p.name}</strong>
          </Link>
        </h3>
        <Link
          to={`explore/universities/${p.universityId}`}
          className="hover:underline"
        >
          {p.university?.name}
        </Link>

        <div className="mt-5">
          <div>
            Course:{' '}
            <Link
              to={`explore/programmes/${p.courseId}`}
              className="hover:underline"
            >
              {p.course?.name}
            </Link>
          </div>
          <div>Duration: {p.duration}</div>
          <div>Medium: {p.medium}</div>
        </div>
      </div>
    </li>
  );
}
