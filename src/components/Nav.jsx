import { NavLink } from 'react-router-dom';
import SiteLogo from './SiteLogo';

export function Nav() {
  return (
    <header className="bg-neutral-950 py-5">
      <div className="mx-auto flex max-w-[60rem] justify-between">
        <SiteLogo />

        <nav className="text-neutral-100">
          <ul className="mx-auto flex gap-12">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/explore">Explore</NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}
