import { useRef, useState } from 'react';

export function App() {
  const [courses, setCourses] = useState(null);
  const searchInputRef = useRef(null);

  function searchCourses(e) {
    e.preventDefault();
    const searchQuery = searchInputRef.current.value;
    if (searchQuery === '') return;

    fetch(`http://127.0.0.1:8080/api/courses?q=${searchQuery}`, {
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
          courses.map((course) => <li key={course.id}>{course.name}</li>)}
      </ul>
    </>
  );
}
