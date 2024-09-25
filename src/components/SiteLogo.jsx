import { Link } from 'react-router-dom';

export default function SiteLogo() {
  return (
    <Link to="/">
      <h3 className="text-white">
        <span className="font-semibold">U</span>NI
        <span className="font-semibold">C</span>OURSE
      </h3>
    </Link>
  );
}
