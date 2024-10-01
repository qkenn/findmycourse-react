import Footer from '../components/Footer';
import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';

export function MainLayout() {
  return (
    <>
      <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
