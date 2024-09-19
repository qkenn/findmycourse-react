import { useContext } from 'react';
import { ProgrammeContext } from '../pages/HomePage';
import { HomeProgrammeCard } from './HomeProgrammeCard';
import { Loading } from './Loading';

export function HomeProgrammes() {
  const { programmes, filteredCourses, searchDB } =
    useContext(ProgrammeContext);
  const pagesCount = Math.ceil(programmes.count / programmes.pageSize);

  return (
    <ul className="col-span-8 flex flex-col gap-10">
      {filteredCourses &&
        filteredCourses.map((p) => <HomeProgrammeCard key={p.id} {...p} />)}

      {programmes.searchError && <p>{programmes.searchError}</p>}
      {programmes.isLoading && <Loading cardsCount={6} page="home" />}

      {programmes.count && filteredCourses && (
        <div className="flex justify-center gap-3">
          {[...Array(pagesCount)].map((_, index) => (
            <button
              disabled={index + 1 === programmes.page}
              className={`${index + 1 === programmes.page ? 'rounded-sm bg-neutral-950 px-2 py-0.5 text-white' : 'hover:underline'}`}
              key={index}
              onClick={() => {
                const pageNumber = index + 1;
                searchDB(programmes.query, pageNumber);
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </ul>
  );
}
