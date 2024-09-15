import { createContext, useState } from 'react';
import { Header } from '../components/Header';
import { MainContent } from '../components/MainContent';
export const HeaderContext = createContext();

export function Home() {
  const [courses, setCourses] = useState([]);
  const [searchError, setSearchError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [universityFilter, setUniversityFilter] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('');

  function searchCourses(e, q) {
    e.preventDefault();
    // if (q === '') return;

    console.log(q);

    setIsLoading(true);
    setSearchError(false);
    setCourses([]);

    fetch(
      'http://localhost:8080/api/programmes?' + new URLSearchParams({ q }),
      {
        mode: 'cors',
      }
    )
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
        console.warn(e.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function filterByUniversity(newValue) {
    setUniversityFilter(newValue);
  }

  function filterBySubject(newValue) {
    setSubjectFilter(newValue);
  }

  const filteredCourses = courses && filterCourses();

  function filterCourses() {
    let clonedCourses = [...courses];

    if (universityFilter && universityFilter !== 'All') {
      clonedCourses = clonedCourses.filter((c) =>
        c.university?.name
          .toLowerCase()
          .includes(universityFilter.toLowerCase())
      );
    }

    if (subjectFilter && subjectFilter !== 'All') {
      clonedCourses = clonedCourses.filter(
        (c) => c.subject?.name.toLowerCase() === subjectFilter.toLowerCase()
      );
    }
    console.log(universityFilter, subjectFilter);

    return clonedCourses;
  }

  console.log(courses);

  return (
    <>
      <HeaderContext.Provider value={{ searchCourses }}>
        <Header />
      </HeaderContext.Provider>

      {courses.length > 0 && (
        <MainContent
          filterByUniversity={filterByUniversity}
          filterBySubject={filterBySubject}
          courses={filteredCourses}
          searchError={searchError}
          isLoading={isLoading}
        />
      )}
    </>
  );
}
