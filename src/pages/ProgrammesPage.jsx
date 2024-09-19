import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import { ProgrammeCard } from '../components/ProgrammeCard';
import { Loading } from '../components/Loading';

export function ProgrammesPage() {
  const { state } = useNavigation();
  const programmes = useLoaderData();

  return (
    <main className="mx-auto my-20 max-w-main">
      <Link to={-1} className="underline">
        ⬅ previous page
      </Link>

      {state === 'loading' ? (
        <Loading page="details" />
      ) : (
        <ul className="mt-5 grid grid-cols-2 gap-12">
          {programmes.map((programme) => (
            <ProgrammeCard key={programme.id} {...programme} />
          ))}
        </ul>
      )}
    </main>
  );
}
