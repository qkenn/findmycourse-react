import { useLoaderData, useNavigation } from 'react-router-dom';
import { UniversityCard } from '../components/UniversityCard';
import { Loading } from '../components/Loading';
import { Breadcrumb } from '../components/BreadCrumb';

export function UniversitiesPage() {
  const { state } = useNavigation();
  const universities = useLoaderData();

  return (
    <main className="mx-auto my-20 max-w-main">
      <section>
        {state === 'loading' ? (
          <Loading page="details" />
        ) : (
          <>
            <Breadcrumb />

            <ul className="mt-5 grid grid-cols-2 gap-12">
              {universities.map((university) => (
                <UniversityCard key={university.id} {...university} />
              ))}
            </ul>
          </>
        )}
      </section>
    </main>
  );
}
