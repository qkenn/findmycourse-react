import { Link, useLoaderData } from 'react-router-dom';
import { SubjectCard } from '../components/SubjectCard';

export function SubjectsPage() {
  const subjects = useLoaderData();

  return (
    <main>
      <section className="mx-auto my-20 max-w-main">
        <Link to={-1} className="underline">
          ⬅ previous page
        </Link>
        <ul className="mt-5 grid grid-cols-2 gap-12">
          {subjects.map((s) => (
            <SubjectCard key={s.id} {...s} />
          ))}
        </ul>
      </section>
    </main>
  );
}
