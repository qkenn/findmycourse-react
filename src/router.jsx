import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { MainLayout } from './layouts/MainLayout';

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
      { path: '/explore', element: <h1>Explore page</h1> },
      { path: '/check-eligibility', element: <h1>Check Eligibiliity page</h1> },
    ],
  },
]);
