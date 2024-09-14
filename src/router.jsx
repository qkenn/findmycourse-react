import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { MainLayout } from './layouts/MainLayout';
import { Explore } from './pages/Explore';
import { Subjects } from './pages/Subjects';
import { Universities } from './pages/Universities';
import { Programmes } from './pages/Programmes';

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
          { path: 'subjects', element: <Subjects /> },
          { path: 'programmes', element: <Programmes /> },
          { path: 'universities', element: <Universities /> },
        ],
      },
      { path: '/check-eligibility', element: <h1>Check Eligibiliity page</h1> },
    ],
  },
]);
