import { Link } from 'react-router-dom';

export function SubjectCard({ id, name, courses }) {
  return (
    <Link
      to={`/explore/subjects/${id}`}
      className="self-start rounded-sm bg-white p-10"
    >
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>

        {courses.length > 0 && (
          <div className="mt-3 inline-block text-neutral-700 hover:underline">
            {courses.length === 1 ? '1 Course' : `${courses.length} Courses`}
          </div>
        )}
      </div>
    </Link>
  );
}
