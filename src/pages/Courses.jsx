import { Link, useLoaderData } from 'react-router-dom';

export function Courses() {
  const courses = useLoaderData();

  return (
    <main className="mx-auto mt-10 max-w-main">
      <Link to=".." className="underline">
        go back
      </Link>
      <ul>
        {courses.map((s) => (
          <li key={s.id}>{s.name}</li>
        ))}
      </ul>
    </main>
  );
}
