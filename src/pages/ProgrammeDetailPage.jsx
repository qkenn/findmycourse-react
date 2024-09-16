import { useLoaderData } from 'react-router-dom';

export function ProgrammeDetailPage() {
  const programme = useLoaderData();

  return <>{programme.name}</>;
}
