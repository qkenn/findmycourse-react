import { Link } from 'react-router-dom';

export function CourseDetails({ data }) {
  return (
    <div className="mt-5 bg-white p-10">
      <h1 className="text-4xl font-semibold">{data.name}</h1>

      <div className="mt-10">
        <h3 className="text-2xl">Programmes</h3>
        {data.programmes.length > 0 && (
          <ul className="mt-5">
            {data.programmes.map((course) => (
              <li key={course.id}>
                <Link
                  to={`/explore/programmes/${course.id}`}
                  className="hover:underline"
                >
                  ✳ {course.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export function SubjectDetails({ data }) {
  return (
    <div className="mt-5 bg-white p-10">
      <h1 className="text-4xl font-semibold">{data.name}</h1>

      <div className="mt-10">
        <h3 className="text-2xl">Courses</h3>
        {data.courses.length > 0 && (
          <ul className="mt-5">
            {data.courses.map((course) => (
              <li key={course.id}>
                <Link
                  to={`/explore/courses/${course.id}`}
                  className="hover:underline"
                >
                  ✳ {course.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export function UniversityDetails({ data }) {
  return (
    <div className="mt-5 bg-white p-10">
      <h1 className="text-4xl font-semibold">{data.name}</h1>

      <div className="mt-10">
        <h3 className="text-2xl">Programmes</h3>
        {data.programmes.length > 0 && (
          <ul className="mt-5">
            {data.programmes.map((programme) => (
              <li key={programme.id}>
                <Link
                  to={`/explore/programmes/${programme.id}`}
                  className="hover:underline"
                >
                  ✳ {programme.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export function ProgrammeDetails({ data }) {
  return (
    <div className="mt-5 bg-white p-10">
      <h1 className="text-4xl font-semibold">{data.name}</h1>
      <h3 className="mt-3">{data.university.name}</h3>

      <div className="mt-10">
        <div>Course - {data.course?.name}</div>
        <div>Unicode - {data.uniCode}</div>
        <div>Duration - {data.duration}</div>
        <div>Medium - {data.medium}</div>
      </div>
    </div>
  );
}
