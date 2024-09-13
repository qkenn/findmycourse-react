import { useRef, useState } from 'react';

export function App() {
  const [courses, setCourses] = useState(null);
  const [searchError, setSearchError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchInputRef = useRef(null);

  function searchCourses(e) {
    e.preventDefault();
    const q = searchInputRef.current.value;
    if (q === '') return;

    setIsLoading(true);
    setSearchError(false);
    setCourses(null);

    fetch('http://localhost:8080/api/courses?' + new URLSearchParams({ q }), {
      mode: 'cors',
    })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error('Not Found');
        }

        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCourses(data);
      })
      .catch((e) => {
        setSearchError(true);
        console.log(e.message);
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <>
      <header>
        <form onSubmit={searchCourses}>
          <label>
            Search
            <input type="text" name="q" ref={searchInputRef} className="ring" />
          </label>

          <button className="ml-5 border-4">Submit</button>
        </form>
      </header>

      <ul className="mt-10">
        {courses &&
          courses.map((c) => (
            <li key={c.id}>
              <strong>{c.subject?.name}</strong> <span>({c.name})</span>{' '}
              <span>{c.medium || ''}</span> <span>{c.duration || ''}</span>
            </li>
          ))}
      </ul>

      {searchError && <p>Not found</p>}
      {isLoading && <p>Loading...</p>}
    </>
  );
}
