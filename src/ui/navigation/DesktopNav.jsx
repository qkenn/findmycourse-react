import { NavLink } from 'react-router-dom';

export default function DesktopNav() {
  return (
    <nav
      className="hidden text-neutral-100 sm:block"
      aria-label="Desktop Navigation"
    >
      <ul className="flex gap-10">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/explore">Explore</NavLink>
      </ul>
    </nav>
  );
}
