import { Link, useLoaderData } from 'react-router-dom';
import { CourseCard } from '../components/CourseCard';

export function CoursesPage() {
  const courses = useLoaderData();

  return (
    <main className="mx-auto mt-10 max-w-main">
      <section>
        <Link to=".." className="underline">
          go back
        </Link>
        <ul className="mt-5 grid grid-cols-2 gap-12">
          {courses.map((c) => (
            <CourseCard key={c.id} {...c} />
          ))}
        </ul>
      </section>
    </main>
  );
}
