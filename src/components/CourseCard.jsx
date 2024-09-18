import { Link } from 'react-router-dom';

export function CourseCard({ id, name, programmes }) {
  return (
    <Link
      to={`/explore/courses/${id}`}
      className="self-start rounded-sm bg-white p-10"
    >
      <h2 className="text-xl font-semibold">{name}</h2>

      <div>
        {programmes.length > 0 && (
          <div>
            <h3>
              {programmes.length}{' '}
              {programmes.length === 1 ? 'programme' : 'programmes'}
            </h3>
          </div>
        )}
      </div>
    </Link>
  );
}
