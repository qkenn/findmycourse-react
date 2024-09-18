import { Link, useLoaderData } from 'react-router-dom';
import { CourseCard } from '../components/CourseCard';

export function CoursesPage() {
  const courses = useLoaderData();

  return (
    <main className="mx-auto my-20 max-w-main">
      <section>
        <Link to={-1} className="underline">
          ⬅ previous page
        </Link>
        <ul className="mt-5 grid grid-cols-2 gap-12">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </ul>
      </section>
    </main>
  );
}
