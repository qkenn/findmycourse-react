import { Link } from 'react-router-dom';

export function CourseCard({ id, name, programmes }) {
  return (
    <Link
      to={`/explore/courses/${id}`}
      className="self-start rounded-sm bg-white p-10"
    >
      <div className="flex justify-between">
        <h2
          className={`${programmes.length > 0 ? 'max-w-[15rem]' : null} text-xl font-semibold`}
        >
          {name}
        </h2>

        {programmes.length > 0 && (
          <div>
            {programmes.length === 1
              ? '1 Programme'
              : `${programmes.length} Programmes`}
          </div>
        )}
      </div>
    </Link>
  );
}
