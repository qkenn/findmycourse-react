import { createContext, useRef, useState } from 'react';
import { Header } from './components/Header';
import { ProgrammesList } from './components/ProgrammesList';
import { MainContent } from './components/MainContent';
export const HeaderContext = createContext();

export function App() {
  const [courses, setCourses] = useState([]);
  const [searchError, setSearchError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [universityFilter, setUniversityFilter] = useState('');

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

  function filterByUniversity(newValue) {
    setUniversityFilter(newValue);
  }

  const filteredCourses =
    courses &&
    (universityFilter === '' || universityFilter == 'all'
      ? courses
      : courses.filter((c) => c.university?.name?.includes(universityFilter)));

  return (
    <>
      <HeaderContext.Provider value={{ searchCourses }}>
        <Header />
      </HeaderContext.Provider>

      <MainContent
        filterByUniversity={filterByUniversity}
        courses={filteredCourses}
        searchError={searchError}
        isLoading={isLoading}
      />
    </>
  );
}
