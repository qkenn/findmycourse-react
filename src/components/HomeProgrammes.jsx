import { useContext } from 'react';
import { ProgrammeContext } from '../pages/HomePage';
import { HomeProgrammeCard } from './HomeProgrammeCard';
import { Loading } from './Loading';
import PaginationLink from './PaginationLink';

export function HomeProgrammes() {
  const { programmes } = useContext(ProgrammeContext);
  const pagesCount =
    (programmes.count || 0) <= (programmes.pageSize || 8)
      ? 1
      : Math.ceil((programmes.count || 0) / (programmes.pageSize || 8));

  return (
    <ul className="col-span-8 flex flex-col gap-10">
      {programmes.results &&
        programmes.results.map((p) => <HomeProgrammeCard key={p.id} {...p} />)}

      {programmes.searchError && <p>{programmes.searchError}</p>}

      {programmes.isLoading && <Loading cardsCount={6} page="home" />}

      {programmes.count && programmes.results && (
        <div className="flex justify-center gap-3">
          {[...Array(pagesCount)].map((_, index) => (
            // pagination links
            <PaginationLink key={index} index={index} />
          ))}
        </div>
      )}
    </ul>
  );
}
