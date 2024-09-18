import { Link, useLoaderData } from 'react-router-dom';
import { ProgrammeCard } from '../components/ProgrammeCard';

export function ProgrammesPage() {
  const programmes = useLoaderData();

  return (
    <main className="mx-auto my-20 max-w-main">
      <Link to={-1} className="underline">
        ⬅ previous page
      </Link>
      <ul className="mt-5 grid grid-cols-2 gap-12">
        {programmes.map((programme) => (
          <ProgrammeCard key={programme.id} {...programme} />
        ))}
      </ul>
    </main>
  );
}
