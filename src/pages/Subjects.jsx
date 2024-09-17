import { Link, useLoaderData } from 'react-router-dom';
import { SubjectCard } from '../components/SubjectCard';

export function Subjects() {
  const subjects = useLoaderData();

  return (
    <main className="bg-neutral-100 py-10">
      <div className="mx-auto max-w-main">
        <Link to={-1} className="underline">
          ⬅ previous page
        </Link>
        <ul className="mt-5 grid grid-cols-2 gap-12">
          {subjects.map((s) => (
            <SubjectCard key={s.id} {...s} />
          ))}
        </ul>
      </div>
    </main>
  );
}
