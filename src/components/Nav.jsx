import { NavLink, Link } from 'react-router-dom';
import SiteLogo from './SiteLogo';
import { useState } from 'react';

export function Nav() {
  const [hamburgerSelected, setHamburgerSelected] = useState(false);

  return (
    <>
      <header
        className={`${hamburgerSelected ? 'fixed left-0 right-0 top-0' : 'relative'} z-30 bg-neutral-950 py-5`}
      >
        <div className="mx-auto flex max-w-[60rem] items-center justify-between px-5 md:px-0">
          <SiteLogo />

          <nav
            className="hidden text-neutral-100 sm:block"
            aria-label="Desktop Navigation"
          >
            <ul className="flex gap-10">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/explore">Explore</NavLink>
            </ul>
          </nav>

          <button
            className="w-[25px flex h-[25px] items-center justify-center sm:hidden"
            onClick={() => setHamburgerSelected((h) => !h)}
          >
            <div
              className={`relative h-[2px] w-[25px] bg-white transition-all before:absolute before:bottom-[7px] before:left-0 before:h-full before:w-full before:bg-white before:transition-all after:absolute after:left-0 after:top-[7px] after:h-full after:w-full after:bg-white after:transition-all sm:hidden ${hamburgerSelected && 'bg-transparent before:translate-y-[7px] before:rotate-45 after:-translate-y-[7px] after:-rotate-45'}`}
              type="button"
              aria-label="Toggle menu"
            ></div>
          </button>
        </div>
      </header>

      <nav
        className={`fixed inset-0 z-20 flex items-center bg-neutral-950/90 p-20 transition duration-300 ease-in-out sm:hidden ${hamburgerSelected ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
        aria-label="Mobile Navigation"
      >
        <ul className="flex flex-col gap-10 text-4xl font-semibold text-white">
          <Link to="/" onClick={() => setHamburgerSelected(false)}>
            Home
          </Link>
          <Link to="/explore" onClick={() => setHamburgerSelected(false)}>
            Explore
          </Link>
        </ul>
      </nav>
    </>
  );
}
