import { useRef, useState } from 'react';

export function App() {
  const [courses, setCourses] = useState(null);
  const searchInputRef = useRef(null);

  function searchCourses(e) {
    e.preventDefault();

    const q = searchInputRef.current.value;
    if (q === '') return;

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
        console.log(e.message);
      });
    console.log('form hooked', searchInputRef.current.value);
  }

  return (
    <>
      <header>
        <form onSubmit={searchCourses}>
          <label>
            Search
            <input type="text" name="q" ref={searchInputRef} />
          </label>

          <button>Submit</button>
        </form>
      </header>

      <ul>
        {courses &&
          courses.map((c) => (
            <li key={c.id}>
              <strong>{c.subject?.name}</strong> <span>({c.name})</span>{' '}
              <span>{c.medium || ''}</span> <span>{c.duration || ''}</span>
            </li>
          ))}
      </ul>
    </>
  );
}
