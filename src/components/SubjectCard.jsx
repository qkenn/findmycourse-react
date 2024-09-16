import { useState } from 'react';
import { Link } from 'react-router-dom';

export function SubjectCard({ name, courses }) {
  const [coursesVisibility, setCoursesVisibility] = useState(false);

  return (
    <li className="self-start rounded-sm bg-slate-100 p-10">
      <div className="flex justify-between">
        <h2 className="max-w-[15rem] text-xl font-semibold">{name}</h2>
        <button onClick={() => setCoursesVisibility((current) => !current)}>
          {courses.length} {courses.length === 1 ? 'course' : 'courses'}
        </button>
      </div>

      {coursesVisibility && courses.length > 0 && (
        <ul className="mt-5">
          {courses.map((c) => (
            <li key={c.id}>
              <Link to={`/explore/courses/${c.id}`} className="hover:underline">
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
