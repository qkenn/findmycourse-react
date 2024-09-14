export function ProgrammesList({ courses, searchError, isLoading }) {
  return (
    <ul className="col-span-8 col-start-5 mx-auto max-w-main">
      {courses.map((c) => (
        <li key={c.id}>
          <strong>{c.subject?.name}</strong> <span>({c.name})</span>{' '}
          <span>{c.medium || ''}</span> <span>{c.duration || ''}</span>
        </li>
      ))}

      {searchError && <p>Not found</p>}
      {isLoading && <p>Loading...</p>}
    </ul>
  );
}
