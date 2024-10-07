import { useLoaderData } from 'react-router-dom';
import { Breadcrumb } from '../components/navigation/BreadCrumb';
import {
  CourseDetails,
  ProgrammeDetails,
  SubjectDetails,
  UniversityDetails,
} from '../components/EntityDetails';

export default function EntityDetailsPage({ type }) {
  const data = useLoaderData();

  const pages = [
    { type: 'course', component: CourseDetails },
    { type: 'subject', component: SubjectDetails },
    { type: 'university', component: UniversityDetails },
    { type: 'programme', component: ProgrammeDetails },
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
