import clsx from 'clsx';
import { Link } from 'react-router-dom';

export default function MobileNav({ hamSelected, closeHamMenu }) {
  return (
    <nav
      className={clsx(
        'fixed inset-0 z-20 flex items-center bg-neutral-950/90 p-20 transition duration-300 ease-in-out sm:hidden',
        {
          'translate-x-0 opacity-100': hamSelected,
          'translate-x-full opacity-0': !hamSelected,
        }
      )}
      aria-label="Mobile Navigation"
    >
      <ul className="flex flex-col gap-10 text-4xl font-semibold text-white">
        <Link className="hover:underline" to="/" onClick={closeHamMenu}>
          Home
        </Link>
        <Link className="hover:underline" to="/explore" onClick={closeHamMenu}>
          Explore
        </Link>
      </ul>
    </nav>
  );
}
