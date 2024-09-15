import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { MainLayout } from './layouts/MainLayout';
import { Explore } from './pages/Explore';
import { Subjects } from './pages/Subjects';
import { Universities } from './pages/Universities';
import { Programmes } from './pages/Programmes';
import { Courses } from './pages/Courses';

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
            element: <Subjects />,
            loader: ({ request: { signal } }) => {
              return fetch('http://localhost:8080/api/subjects', signal);
            },
          },
          {
            path: 'courses',
            element: <Courses />,
            loader: ({ request: { signal } }) => {
              return fetch('http://localhost:8080/api/courses', signal);
            },
          },
          {
            path: 'programmes',
            element: <Programmes />,
            loader: ({ request: { signal } }) => {
              return fetch('http://localhost:8080/api/programmes', signal);
            },
          },
          {
            path: 'universities',
            element: <Universities />,
            loader: ({ request: { signal } }) => {
              return fetch('http://localhost:8080/api/universities', signal);
            },
          },
        ],
      },
      { path: '/check-eligibility', element: <h1>Check Eligibiliity page</h1> },
    ],
  },
]);
