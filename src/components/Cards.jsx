import { Link } from 'react-router-dom';

export function SubjectCard({ id, name, courses }) {
  return (
    <Link
      to={`/explore/subjects/${id}`}
      className="self-start rounded-sm bg-white p-10"
    >
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>

        {courses.length > 0 && (
          <div className="mt-3 inline-block text-neutral-700 hover:underline">
            {courses.length === 1 ? '1 Course' : `${courses.length} Courses`}
          </div>
        )}
      </div>
    </Link>
  );
}

export function CourseCard({ id, name, programmes }) {
  return (
    <Link to={`/explore/courses/${id}`} className="rounded-sm bg-white p-10">
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>

        {programmes.length > 0 && (
          <div className="mt-3 inline-block text-neutral-700 hover:underline">
            {programmes.length === 1
              ? '1 Programme'
              : `${programmes.length} Programmes`}
          </div>
        )}
      </div>
    </Link>
  );
}

export function ProgrammeCard({ id, name, university }) {
  return (
    <Link
      to={`/explore/programmes/${id}`}
      className="self-start rounded-sm bg-white p-10"
    >
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <Link
          to={`/explore/universities/${university.id}`}
          className="mt-3 inline-block text-neutral-700 hover:underline"
        >
          {university.name}
        </Link>
      </div>
    </Link>
  );
}

export function UniversityCard({ id, name, programmes }) {
  return (
    <Link
      to={`/explore/universities/${id}`}
      className="self-start rounded-sm bg-white p-10"
    >
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>

        {programmes.length > 0 && (
          <div className="mt-3 inline-block text-neutral-700 hover:underline">
            {programmes.length === 1
              ? '1 Programme'
              : `${programmes.length} Programmes`}
          </div>
        )}
      </div>
    </Link>
  );
}
