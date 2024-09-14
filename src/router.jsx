import { createBrowserRouter } from 'react-router-dom';
import { Home } from './Home';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/explore', element: <h1>Explore page</h1> },
  { path: '/check-eligibility', element: <h1>Check Eligibiliity page</h1> },
]);
