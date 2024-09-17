import { Link, useLoaderData } from 'react-router-dom';

export function ProgrammesPage() {
  const programmes = useLoaderData();

  return (
    <main className="mx-auto mt-10 max-w-main">
      <Link to=".." className="underline">
        go back
      </Link>
      <ul>
        {programmes.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </main>
  );
}
