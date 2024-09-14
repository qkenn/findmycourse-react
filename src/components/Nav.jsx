import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <nav className="py-8">
      <ul className="mx-auto flex max-w-[60rem] justify-end gap-5">
        <li>
          <Link to="explore">Explore</Link>
        </li>
        <li>
          <Link to="check-eligibility">Check Eligibility</Link>
        </li>
      </ul>
    </nav>
  );
}
