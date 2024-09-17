import { useLoaderData } from 'react-router-dom';

export function ProgrammeDetailsPage() {
  const programme = useLoaderData();

  return <>{programme.name}</>;
}
