import { Link } from 'react-router-dom';

export function HomeProgrammeCard({
  name,
  id,
  university,
  course,
  duration,
  medium,
}) {
  return (
    <Link to={`explore/programmes/${id}`} className="rounded-sm bg-white p-7">
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <Link
          to={`explore/universities/${university.id}`}
          className="hover:underline"
        >
          {university?.name}
        </Link>

        <div className="mt-5">
          <div>
            Course:{' '}
            <Link
              to={`explore/courses/${course.id}`}
              className="hover:underline"
            >
              {course?.name}
            </Link>
          </div>
          <div>Duration: {duration}</div>
          <div>Medium: {medium}</div>
        </div>
      </div>
    </Link>
  );
}
