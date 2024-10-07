import { useLoaderData, useNavigation } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { Breadcrumb } from '../components/navigation/BreadCrumb';
import { CenteredContainer, TwoColGrid } from '../components/Containers';
import {
  CourseCard,
  ProgrammeCard,
  SubjectCard,
  UniversityCard,
} from '../components/Cards';

export function EntityPage({ type }) {
  const { state } = useNavigation();
  const data = useLoaderData();

  const pages = [
    { type: 'course', component: CourseCard },
    { type: 'subject', component: SubjectCard },
    { type: 'university', component: UniversityCard },
    { type: 'programme', component: ProgrammeCard },
  ];
  const Card = pages.find((page) => page.type === type).component;
  const cards = data.map((entity) => {
    return <Card key={entity.id} {...entity} />;
  });

  return (
    <main>
      <CenteredContainer>
        {state === 'loading' ? (
          <Loading page="details" />
        ) : (
          <>
            <Breadcrumb />
            <TwoColGrid>{cards}</TwoColGrid>
          </>
        )}
      </CenteredContainer>
    </main>
  );
}
