import { Link } from 'react-router-dom';

export function MobileNavLink({ text, href, closeHandler }) {
  return (
    <Link className="hover:underline" to={href} onClick={closeHandler}>
      {text}
    </Link>
  );
}
