import { useContext } from 'react';
import { ProgrammeContext } from '../pages/HomePage';
import clsx from 'clsx';

export function PaginatedResultsDetails() {
  const { programmes } = useContext(ProgrammeContext);

  return (
    <div>
      {`Showing ${(programmes.page - 1) * programmes.pageSize + 1} - ${(programmes.page - 1) * programmes.pageSize + programmes.results.length} of ${programmes.count} results.`}
    </div>
  );
}

export function PageLink({ page, active, search }) {
  return (
    <button
      disabled={active}
      className={clsx({
        'rounded-sm bg-neutral-950 px-2 py-0.5 text-white': active,
        'hover:underline': !active,
      })}
      onClick={search}
    >
      {page}
    </button>
  );
}

export function PaginationWrapper({ children }) {
  return <div className="flex justify-center gap-3">{children}</div>;
}
