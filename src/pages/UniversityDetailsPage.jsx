import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/BreadCrumb';

export function UniversityDetailsPage() {
  const university = useLoaderData();

  return (
    <main className="my-20 bg-neutral-100">
      <div className="mx-auto max-w-main">
        <Breadcrumb />

        <section className="mt-5 bg-white p-10">
          <h1 className="text-4xl font-semibold">{university.name}</h1>

          <div className="mt-10">
            <h3 className="text-2xl">Programmes</h3>
            {university.programmes.length > 0 && (
              <ul className="mt-5">
                {university.programmes.map((programme) => (
                  <li key={programme.id}>
                    <Link
                      to={`/explore/programmes/${programme.id}`}
                      className="hover:underline"
                    >
                      ✳ {programme.name}
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
