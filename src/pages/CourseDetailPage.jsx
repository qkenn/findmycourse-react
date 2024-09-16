import { useLoaderData } from 'react-router-dom';

export function CourseDetailPage() {
  const course = useLoaderData();

  return <>{course.name}</>;
}
