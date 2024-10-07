import { useLoaderData, useNavigation } from 'react-router-dom';
import { UniversityCard } from '../components/UniversityCard';
import { Loading } from '../components/Loading';
import { Breadcrumb } from '../components/navigation/BreadCrumb';
import { Section, TwoColGrid } from '../components/Containers';

export function UniversitiesPage() {
  const { state } = useNavigation();
  const universities = useLoaderData();

  return (
    <main>
      <Section>
        {state === 'loading' ? (
          <Loading page="details" />
        ) : (
          <>
            <Breadcrumb />

            <TwoColGrid>
              {universities.map((university) => (
                <UniversityCard key={university.id} {...university} />
              ))}
            </TwoColGrid>
          </>
        )}
      </Section>
    </main>
  );
}
