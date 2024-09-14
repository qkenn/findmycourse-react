import { Link, useLoaderData } from 'react-router-dom';

export function Subjects() {
  const subjects = useLoaderData();

  return (
    <main className="mx-auto mt-10 max-w-main">
      <Link to=".." className="underline">
        go back
      </Link>
      <ul>
        {subjects.map((s) => (
          <li key={s.id}>{s.name}</li>
        ))}
      </ul>
    </main>
  );
}
