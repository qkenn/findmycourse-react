import { Link } from 'react-router-dom';

export default function SiteLogo() {
  return (
    <Link to="/">
      <div className="flex items-center justify-center gap-2">
        <div className="h-[30px] w-[30px]">
          <img src="/site-logo.svg" alt="Site Logo" />
        </div>

        <h4 className="pt-1 text-white">unicourse</h4>
      </div>
    </Link>
  );
}
