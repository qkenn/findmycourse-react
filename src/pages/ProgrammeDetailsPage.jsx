import { useLoaderData } from 'react-router-dom';
import { Breadcrumb } from '../components/BreadCrumb';

export function ProgrammeDetailsPage() {
  const programme = useLoaderData();

  return (
    <main className="my-20 bg-neutral-100">
      <div className="mx-auto max-w-main">
        <Breadcrumb />

        <section className="mt-5 bg-white p-10">
          <h1 className="text-4xl font-semibold">{programme.name}</h1>
          <h3 className="mt-3">{programme.university.name}</h3>

          <div className="mt-10">
            <div>Course - {programme.course?.name}</div>
            <div>Unicode - {programme.uniCode}</div>
            <div>Duration - {programme.duration}</div>
            <div>Medium - {programme.medium}</div>
          </div>
        </section>
      </div>
    </main>
  );
}
