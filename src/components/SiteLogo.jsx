import { Link } from 'react-router-dom';

export default function SiteLogo() {
  return (
    <Link to="/">
      <div className="h-[50px] w-[50px]">
        <img src="/site-logo.svg" alt="Site Logo" />
      </div>
    </Link>
  );
}
