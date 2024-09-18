import { Link, useLoaderData } from 'react-router-dom';
import { UniversityCard } from '../components/UniversityCard';

export function UniversitiesPage() {
  const universities = useLoaderData();

  return (
    <main className="mx-auto my-20 max-w-main">
      <section>
        <Link to={-1} className="underline">
          ⬅ previous page
        </Link>
        <ul className="mt-5 grid grid-cols-2 gap-12">
          {universities.map((university) => (
            <UniversityCard key={university.id} {...university} />
          ))}
        </ul>
      </section>
    </main>
  );
}
