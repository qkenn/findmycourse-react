import { useLoaderData } from 'react-router-dom';

export function SubjectDetailPage() {
  const subject = useLoaderData();

  return <>{subject.name}</>;
}
