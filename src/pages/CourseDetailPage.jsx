import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function CourseDetailPage() {
  const course = useLoaderData();

  return (
    <main className="bg-neutral-100 py-10">
      <div className="mx-auto max-w-main">
        <Link to={-1} className="underline">
          ⬅ previous page
        </Link>

        <section>
          <h2>{course.name}</h2>
          <h3>Subject: {course.subject?.name}</h3>
          <div>Intake: {course.intake}</div>
          <div>Course Code: {course.courseCode}</div>
        </section>
      </div>
    </main>
  );
}
