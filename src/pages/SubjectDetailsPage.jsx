import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function SubjectDetailsPage() {
  const subject = useLoaderData();

  return (
    <main className="my-20 bg-neutral-100">
      <div className="mx-auto max-w-main">
        <Link to={-1} className="underline">
          ⬅ previous page
        </Link>

        <section className="mt-5 bg-white p-10">
          <h1 className="text-4xl font-semibold">{subject.name}</h1>

          <div className="mt-10">
            <h3 className="text-2xl">Courses</h3>
            {subject.courses.length > 0 && (
              <ul className="mt-5">
                {subject.courses.map((c) => (
                  <li key={c.id}>
                    <Link
                      to={`/explore/courses/${c.id}`}
                      className="hover:underline"
                    >
                      ✳ {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
