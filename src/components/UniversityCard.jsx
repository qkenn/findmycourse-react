import { Link } from 'react-router-dom';

export function UniversityCard({ id, name, programmes }) {
  return (
    <Link
      to={`/explore/universities/${id}`}
      className="self-start rounded-sm bg-white p-10"
    >
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>

        {programmes.length > 0 && (
          <div className="mt-3 inline-block text-neutral-700 hover:underline">
            {programmes.length === 1
              ? '1 Programme'
              : `${programmes.length} Programmes`}
          </div>
        )}
      </div>
    </Link>
  );
}
