import { createContext, useRef, useState } from 'react';
import { Header } from './components/Header';
import { ProgrammesList } from './components/ProgrammesList';
export const HeaderContext = createContext();

export function App() {
  const [courses, setCourses] = useState(null);
  const [searchError, setSearchError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function searchCourses(e, q) {
    e.preventDefault();
    if (q === '') return;

    console.log(q);

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
      <HeaderContext.Provider value={{ searchCourses }}>
        <Header />
      </HeaderContext.Provider>

      <ProgrammesList
        courses={courses}
        searchError={searchError}
        isLoading={isLoading}
      />
    </>
  );
}
