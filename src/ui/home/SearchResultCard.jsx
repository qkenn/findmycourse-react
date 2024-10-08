import { Link } from 'react-router-dom';

export default function SearchResultCard({
  name,
  id,
  university,
  course,
  duration,
  medium,
}) {
  return (
    <li className="flex flex-col gap-5 rounded-sm bg-white p-7">
      <div>
        <h3 className="text-lg font-semibold sm:text-xl">{name}</h3>
        <Link
          to={`explore/universities/${university.id}`}
          className="hover:underline"
        >
          {university?.name}
        </Link>
      </div>

      <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
        <div>
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

        <Link
          className="inline-block self-end whitespace-nowrap rounded-sm bg-neutral-900 px-5 py-2 text-white sm:mt-0"
          to={`explore/programmes/${id}`}
        >
          More Details
        </Link>
      </div>
    </li>
  );
}
