import { Link } from 'react-router-dom';

const exploreCardsProps = [
  {
    type: 'subject',
    url: 'subjects',
    desc: 'All courses offered by universities grouped into relevent subjects',
  },
  {
    type: 'course',
    url: 'courses',
    desc: 'List of courses offered by universities',
  },
  {
    type: 'programme',
    url: 'programmes',
    desc: 'List of all available degree programmes',
  },
  {
    type: 'university',
    url: 'universities',
    desc: 'List of all state universites and institutes',
  },
];

export function ExplorePageCard({ type }) {
  const card = exploreCardsProps.find((c) => c.type === type);

  return (
    <Link to={card.url} className="rounded-sm bg-white p-8">
      <h2 className="text-2xl font-semibold">
        {card.url.at(0).toUpperCase() + card.url.slice(1)}
      </h2>
      <p className="mt-3 text-slate-700">{card.desc}</p>
    </Link>
  );
}

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
