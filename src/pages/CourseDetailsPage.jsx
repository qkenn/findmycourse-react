import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function CourseDetailsPage() {
  const course = useLoaderData();

  return (
    <main className="my-20 bg-neutral-100">
      <div className="mx-auto max-w-main">
        <Link to={-1} className="underline">
          ⬅ previous page
        </Link>

        <section className="mt-5 bg-white p-10">
          <h1 className="text-4xl font-semibold">{course.name}</h1>

          <div className="mt-10">
            <h3 className="text-2xl">Programmes</h3>
            {course.programmes.length > 0 && (
              <ul className="mt-5">
                {course.programmes.map((c) => (
                  <li key={c.id}>
                    <Link
                      to={`/explore/programmes/${c.id}`}
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
