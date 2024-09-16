import { Link } from 'react-router-dom';

export function ExploreCard({ url, desc }) {
  return (
    <Link to={url} className="rounded-sm bg-slate-100 p-10">
      <h2 className="text-2xl font-semibold">
        {url.at(0).toUpperCase() + url.slice(1)}
      </h2>
      <p className="mt-3 text-slate-700">{desc}</p>
    </Link>
  );
}
