import { Link } from 'react-router-dom';

export function Subjects() {
  return (
    <main className="mx-auto mt-10 max-w-main">
      <Link to=".." className="underline">
        go back
      </Link>
      <p>A list of Subjects</p>
    </main>
  );
}
