import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { MainLayout } from './layouts/MainLayout';
import { Explore } from './pages/Explore';
import { Subjects } from './pages/Subjects';
import { Universities } from './pages/Universities';
import { Programmes } from './pages/Programmes';
import { Courses } from './pages/Courses';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { ProgrammeDetailPage } from './pages/ProgrammeDetailPage';
import { UniversityDetailPage } from './pages/UniversityDetailPage';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <h1>Applicaton Error</h1>,
    children: [
      {
        path: '*',
        element: <h1>404 | This page does not exists | Are you lost ?</h1>,
      },
      { path: '/', element: <Home /> },
      {
        path: '/explore',
        children: [
          { index: true, element: <Explore /> },
          {
            path: 'subjects',
            children: [
              {
                index: true,
                element: <Subjects />,
                loader: ({ request: { signal } }) => {
                  return fetch('http://localhost:8080/api/subjects', signal);
                },
              },
              // {
              //   path: ':id',
              //   element: <SubjectDetailPage />,
              //   loader: ({ params: { id }, request: { signal } }) => {
              //     return fetch(
              //       `http://localhost:8080/api/subjects/${id}`,
              //       signal
              //     );
              //   },
              // },
            ],
          },
          {
            path: 'courses',
            children: [
              {
                index: true,
                element: <Courses />,
                loader: ({ request: { signal } }) => {
                  return fetch('http://localhost:8080/api/courses', signal);
                },
              },
              {
                path: ':id',
                element: <CourseDetailPage />,
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
                element: <Programmes />,
                loader: ({ request: { signal } }) => {
                  return fetch('http://localhost:8080/api/programmes', signal);
                },
              },
              {
                path: ':id',
                element: <ProgrammeDetailPage />,
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
                element: <Universities />,
                loader: ({ request: { signal } }) => {
                  return fetch(
                    'http://localhost:8080/api/universities',
                    signal
                  );
                },
              },
              {
                path: ':id',
                element: <UniversityDetailPage />,
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
      { path: '/check-eligibility', element: <h1>Check Eligibiliity page</h1> },
    ],
  },
]);
