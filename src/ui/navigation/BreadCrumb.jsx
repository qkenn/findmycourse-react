import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x !== '');

  console.log(location);

  return (
    <nav>
      <ol className="flex text-lg">
        {pathnames.map((pathname, index) => (
          <li key={pathname}>
            {index === pathnames.length - 1 ? (
              <span>{pathname}</span>
            ) : (
              <Link
                className="hover:underline"
                to={`/${pathnames.slice(0, index + 1).join('/')}`}
              >
                {pathname + '/'}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
