import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MainLayout } from './layouts/MainLayout';
import { ExplorePage } from './pages/ExplorePage';
import { SubjectsPage } from './pages/SubjectsPage';
import { UniversitiesPage } from './pages/UniversitiesPage';
import { ProgrammesPage } from './pages/ProgrammesPage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailsPage } from './pages/CourseDetailsPage';
import { ProgrammeDetailsPage } from './pages/ProgrammeDetailsPage';
import { UniversityDetailsPage } from './pages/UniversityDetailsPage';
import { AppErrorPage } from './pages/AppErrorPage';
import { NotFound } from './pages/NotFoundPage';
import { SubjectDetailsPage } from './pages/SubjectDetailsPage';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <AppErrorPage />,
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
      { path: '/', element: <HomePage /> },
      {
        path: '/explore',
        children: [
          { index: true, element: <ExplorePage /> },
          {
            path: 'subjects',
            children: [
              {
                index: true,
                element: <SubjectsPage />,
                loader: ({ request: { signal } }) => {
                  return fetch('http://localhost:8080/api/subjects', signal);
                },
              },
              {
                path: ':id',
                element: <SubjectDetailsPage />,
                loader: ({ params: { id }, request: { signal } }) => {
                  return fetch(
                    `http://localhost:8080/api/subjects/${id}`,
                    signal
                  );
                },
              },
            ],
          },
          {
            path: 'courses',
            children: [
              {
                index: true,
                element: <CoursesPage />,
                loader: ({ request: { signal } }) => {
                  return fetch('http://localhost:8080/api/courses', signal);
                },
              },
              {
                path: ':id',
                element: <CourseDetailsPage />,
                loader: ({ params: { id }, request: { signal } }) => {
                  return fetch(
                    `http://localhost:8080/api/courses/${id}`,
                    signal
                  );
                },
              },
            ],
          },
          {
            path: 'programmes',
            children: [
              {
                index: true,
                element: <ProgrammesPage />,
                loader: ({ request: { signal } }) => {
                  return fetch('http://localhost:8080/api/programmes', signal);
                },
              },
              {
                path: ':id',
                element: <ProgrammeDetailsPage />,
                loader: ({ params: { id }, request: { signal } }) => {
                  return fetch(
                    `http://localhost:8080/api/programmes/${id}`,
                    signal
                  );
                },
              },
            ],
          },
          {
            path: 'universities',
            children: [
              {
                index: true,
                element: <UniversitiesPage />,
                loader: ({ request: { signal } }) => {
                  return fetch(
                    'http://localhost:8080/api/universities',
                    signal
                  );
                },
              },
              {
                path: ':id',
                element: <UniversityDetailsPage />,
                loader: ({ params: { id }, request: { signal } }) => {
                  return fetch(
                    `http://localhost:8080/api/universities/${id}`,
                    signal
                  );
                },
              },
            ],
          },
        ],
      },
    ],
  },
]);
