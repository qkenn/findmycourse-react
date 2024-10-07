import { useLoaderData, useNavigation } from 'react-router-dom';
import { CourseCard } from '../components/CourseCard';
import { Loading } from '../components/Loading';
import { Breadcrumb } from '../components/navigation/BreadCrumb';
import { Section, TwoColGrid } from '../components/Containers';

export function CoursesPage() {
  const { state } = useNavigation();
  const courses = useLoaderData();

  return (
    <main>
      <Section>
        {state === 'loading' ? (
          <Loading page="details" />
        ) : (
          <>
            <Breadcrumb />

            <TwoColGrid>
              {courses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </TwoColGrid>
          </>
        )}
      </Section>
    </main>
  );
}
