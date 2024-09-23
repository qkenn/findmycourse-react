import { Link } from 'react-router-dom';

export function ProgrammeCard({ id, name, university }) {
  return (
    <Link
      to={`/explore/programmes/${id}`}
      className="self-start rounded-sm bg-white p-10"
    >
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <Link
          to={`/explore/universities/${university.id}`}
          className="mt-3 inline-block text-neutral-700 hover:underline"
        >
          {university.name}
        </Link>
      </div>
    </Link>
  );
}
