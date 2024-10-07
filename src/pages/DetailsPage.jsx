import { useLoaderData } from 'react-router-dom';
import { Breadcrumb } from '../components/navigation/BreadCrumb';
import {
  CourseDetails,
  ProgrammeDetails,
  SubjectDetails,
  UniversityDetails,
} from '../components/EntityDetails';

export function DetailsPage({ type }) {
  const data = useLoaderData();

  const pages = [
    { type: 'course', component: <CourseDetails data={data} /> },
    { type: 'subject', component: <SubjectDetails data={data} /> },
    { type: 'university', component: <UniversityDetails data={data} /> },
    { type: 'programme', component: <ProgrammeDetails data={data} /> },
  ];

  const page = pages.find((page) => page.type === type);

  return (
    <main className="my-20 bg-neutral-100">
      <section className="mx-auto max-w-main">
        <Breadcrumb />

        {page.component}
      </section>
    </main>
  );
}
