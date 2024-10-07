import { useLoaderData, useNavigation } from 'react-router-dom';
import { ProgrammeCard } from '../components/ProgrammeCard';
import { Loading } from '../components/Loading';
import { Breadcrumb } from '../components/navigation/BreadCrumb';
import { Section, TwoColGrid } from '../components/Containers';

export function ProgrammesPage() {
  const { state } = useNavigation();
  const programmes = useLoaderData();

  return (
    <main>
      <Section>
        {state === 'loading' ? (
          <Loading page="details" />
        ) : (
          <>
            <Breadcrumb />

            <TwoColGrid>
              {programmes.map((programme) => (
                <ProgrammeCard key={programme.id} {...programme} />
              ))}
            </TwoColGrid>
          </>
        )}
      </Section>
    </main>
  );
}
