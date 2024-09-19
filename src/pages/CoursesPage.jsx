import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import { CourseCard } from '../components/CourseCard';
import { Loading } from '../components/Loading';

export function CoursesPage() {
  const { state } = useNavigation();
  const courses = useLoaderData();

  return (
    <main className="mx-auto my-20 max-w-main">
      <section>
        <Link to={-1} className="underline">
          ⬅ previous page
        </Link>

        {state === 'loading' ? (
          <Loading page="details" />
        ) : (
          <ul className="mt-5 grid grid-cols-2 gap-12">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
