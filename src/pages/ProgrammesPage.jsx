import { useLoaderData, useNavigation } from 'react-router-dom';
import { ProgrammeCard } from '../components/ProgrammeCard';
import { Loading } from '../components/Loading';
import { Breadcrumb } from '../components/BreadCrumb';

export function ProgrammesPage() {
  const { state } = useNavigation();
  const programmes = useLoaderData();

  return (
    <main className="mx-auto my-20 max-w-main">
      {state === 'loading' ? (
        <Loading page="details" />
      ) : (
        <>
          <Breadcrumb />

          <ul className="mt-5 grid grid-cols-2 gap-12">
            {programmes.map((programme) => (
              <ProgrammeCard key={programme.id} {...programme} />
            ))}
          </ul>
        </>
      )}
    </main>
  );
}
