import { Link, useLoaderData } from 'react-router-dom';
import { SubjectCard } from '../components/SubjectCard';

export function Subjects() {
  const subjects = useLoaderData();

  return (
    <main className="mx-auto mt-10 max-w-main">
      <Link to={-1} className="underline">
        go back
      </Link>
      <ul className="mt-5 grid grid-cols-2 gap-12">
        {subjects.map((s) => (
          <SubjectCard key={s.id} {...s} />
        ))}
      </ul>
    </main>
  );
}
