import { useLoaderData, useLocation } from 'react-router-dom';
import { Breadcrumb } from '../navigation/BreadCrumb';
import {
  CourseDetails,
  ProgrammeDetails,
  SubjectDetails,
  UniversityDetails,
} from '../explore/EntityDetails';

export default function EntityDetailsPage() {
  const data = useLoaderData();
  const location = useLocation();
  const type = location.pathname.split('/')[2];

  const pages = [
    { type: 'courses', component: CourseDetails },
    { type: 'subjects', component: SubjectDetails },
    { type: 'universities', component: UniversityDetails },
    { type: 'programmes', component: ProgrammeDetails },
  ];

  const DetailsComponent = pages.find((page) => page.type === type).component;

  return (
    <main className="my-20 bg-neutral-100">
      <section className="mx-auto max-w-main">
        <Breadcrumb />
        <DetailsComponent data={data} />
      </section>
    </main>
  );
}
