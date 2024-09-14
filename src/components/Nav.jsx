import { NavLink } from 'react-router-dom';

export function Nav() {
  return (
    <nav className="py-8">
      <ul className="mx-auto flex max-w-[60rem] justify-end gap-5">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/explore">Explore</NavLink>
        </li>
        <li>
          <NavLink to="/check-eligibility">Check Eligibility</NavLink>
        </li>
      </ul>
    </nav>
  );
}
