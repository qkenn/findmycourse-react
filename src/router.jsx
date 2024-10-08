import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './ui/layouts/MainLayout';
import { AppErrorPage, NotFoundPage } from './ui/errors/PageErrors';
import EntityDetailsPage from './ui/pages/EntityDetailsPage';
import { EntityPage } from './ui/pages/EntityPage';
import HomePage from './ui/pages/HomePage';
import { ExplorePage } from './ui/pages/ExplorePage';

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
                element: <EntityPage />,
                loader: ({ request: { signal } }) => {
                  return fetch('http://localhost:8080/api/subjects', signal);
                },
              },
              {
                path: ':id',
                element: <EntityDetailsPage />,
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
                element: <EntityPage />,
                loader: ({ request: { signal } }) => {
                  return fetch('http://localhost:8080/api/courses', signal);
                },
              },
              {
                path: ':id',
                element: <EntityDetailsPage />,
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
                element: <EntityPage />,
                loader: ({ request: { signal } }) => {
                  return fetch('http://localhost:8080/api/programmes', signal);
                },
              },
              {
                path: ':id',
                element: <EntityDetailsPage />,
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
                element: <EntityPage />,
                loader: ({ request: { signal } }) => {
                  return fetch(
                    'http://localhost:8080/api/universities',
                    signal
                  );
                },
              },
              {
                path: ':id',
                element: <EntityDetailsPage />,
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
