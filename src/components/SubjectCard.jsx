import { Link } from 'react-router-dom';

export function SubjectCard({ id, name, courses }) {
  return (
    <Link
      to={`/explore/subjects/${id}`}
      className="self-start rounded-sm bg-white p-10"
    >
      <div className="flex justify-between">
        <h2
          className={`${courses.length > 0 ? 'max-w-[15rem]' : null} text-xl font-semibold`}
        >
          {name}
        </h2>

        {courses.length > 0 && (
          <div>
            {courses.length === 1 ? '1 Course' : `${courses.length} Courses`}
          </div>
        )}
      </div>
    </Link>
  );
}
