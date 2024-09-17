import { useLoaderData } from 'react-router-dom';

export function UniversityDetailsPage() {
  const course = useLoaderData();

  return <>{course.name}</>;
}
