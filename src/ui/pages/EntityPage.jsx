import { useLoaderData, useLocation, useNavigation } from 'react-router-dom';
import { Breadcrumb } from '../navigation/BreadCrumb';
import { CenteredContainer, TwoColGrid } from '../Containers';
import {
  CourseCard,
  ProgrammeCard,
  SubjectCard,
  UniversityCard,
} from '../explore/Cards';
import { EntityDetailsSkelton } from '../Skeltons';

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
          <EntityDetailsSkelton />
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
