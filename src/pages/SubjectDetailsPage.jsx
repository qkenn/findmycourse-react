import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function SubjectDetailsPage() {
  const subject = useLoaderData();

  return (
    <main className="bg-neutral-100 py-10">
      <div className="mx-auto max-w-main">
        <Link to={-1} className="underline">
          ⬅ previous page
        </Link>

        <section>
          <h2>{subject.name}</h2>
        </section>
      </div>
    </main>
  );
}
