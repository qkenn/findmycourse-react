import { Link, useLoaderData } from 'react-router-dom';

export function UniversitiesPage() {
  const universities = useLoaderData();

  return (
    <main className="mx-auto mt-10 max-w-main">
      <Link to=".." className="underline">
        go back
      </Link>
      <ul>
        {universities.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </main>
  );
}
