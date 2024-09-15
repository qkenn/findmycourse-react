import { Link } from 'react-router-dom';

export function Explore() {
  return (
    <>
      <main className="mx-auto mt-10 max-w-main">
        <h1>Explore page</h1>
        <ul className="mt-5">
          <li>
            <Link to="subjects" className="underline">
              Subjects
            </Link>
          </li>
          <li>
            <Link to="courses" className="underline">
              Courses
            </Link>
          </li>
          <li>
            <Link to="programmes" className="underline">
              Degree Programmes
            </Link>
          </li>
          <li>
            <Link to="universities" className="underline">
              Universities
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
