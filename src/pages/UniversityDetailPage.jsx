import { useLoaderData } from 'react-router-dom';

export function UniversityDetailPage() {
  const course = useLoaderData();

  return <>{course.name}</>;
}
