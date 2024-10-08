import { useLoaderData, useLocation, useNavigation } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { Breadcrumb } from '../components/navigation/BreadCrumb';
import { CenteredContainer, TwoColGrid } from '../components/Containers';
import {
  CourseCard,
  ProgrammeCard,
  SubjectCard,
  UniversityCard,
} from '../components/Cards';

export function EntityPage() {
  const { state } = useNavigation();
  const data = useLoaderData();
  const location = useLocation();
  const type = location.pathname.split('/')[2];

  console.log(type);

  const pages = [
    { type: 'courses', component: CourseCard },
    { type: 'subjects', component: SubjectCard },
    { type: 'universities', component: UniversityCard },
    { type: 'programmes', component: ProgrammeCard },
  ];
  const Card = pages.find((page) => page.type === type)?.component;
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
