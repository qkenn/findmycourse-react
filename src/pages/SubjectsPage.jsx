import { useLoaderData, useNavigation } from 'react-router-dom';
import { SubjectCard } from '../components/SubjectCard';
import { Loading } from '../components/Loading';
import { Breadcrumb } from '../components/navigation/BreadCrumb';
import { Section, TwoColGrid } from '../components/Containers';

export function SubjectsPage() {
  const { state } = useNavigation();
  const subjects = useLoaderData();

  return (
    <main>
      <Section>
        {state === 'loading' ? (
          <Loading page="details" />
        ) : (
          <>
            <Breadcrumb />

            <TwoColGrid>
              {subjects?.map((subject) => (
                <SubjectCard key={subject.id} {...subject} />
              ))}
            </TwoColGrid>
          </>
        )}
      </Section>
    </main>
  );
}
