import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { MainLayout } from './layouts/MainLayout';
import { ExplorePage } from './pages/ExplorePage';
import { AppErrorPage, NotFoundPage } from './components/Erros';
import EntityDetailsPage from './pages/EntityDetailsPage';
import { EntityPage } from './pages/EntityPage';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <AppErrorPage />,
    children: [
      {
        path: '*',
        element: <NotFoundPage />,
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
                element: <EntityPage type="subject" />,
                loader: ({ request: { signal } }) => {
                  return fetch('http://localhost:8080/api/subjects', signal);
                },
              },
              {
                path: ':id',
                element: <EntityDetailsPage type="subject" />,
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
                element: <EntityPage type="course" />,
                loader: ({ request: { signal } }) => {
                  return fetch('http://localhost:8080/api/courses', signal);
                },
              },
              {
                path: ':id',
                element: <EntityDetailsPage type="course" />,
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
                element: <EntityPage type="programme" />,
                loader: ({ request: { signal } }) => {
                  return fetch('http://localhost:8080/api/programmes', signal);
                },
              },
              {
                path: ':id',
                element: <EntityDetailsPage type="programme" />,
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
                element: <EntityPage type="university" />,
                loader: ({ request: { signal } }) => {
                  return fetch(
                    'http://localhost:8080/api/universities',
                    signal
                  );
                },
              },
              {
                path: ':id',
                element: <EntityDetailsPage type="university" />,
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
