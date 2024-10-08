import { useContext } from 'react';
import { ProgrammeContext } from '../pages/HomePage';
import { HomeProgrammeCard } from './HomeProgrammeCard';
import SearchError from './SearchError';
import { PageLink, PaginationWrapper } from './Pagination';
import { SearchResultsSkelton } from './Skeltons';

export function HomeProgrammes() {
  const { programmes, searchProgrammes, programmesDispatch } =
    useContext(ProgrammeContext);
  const pagesCount =
    (programmes.count || 0) <= (programmes.pageSize || 8)
      ? 1
      : Math.ceil((programmes.count || 0) / (programmes.pageSize || 8));

  return (
    <section className="md:col-span-8">
      <ul className="flex flex-col gap-10">
        {programmes?.results?.map((p) => (
          <HomeProgrammeCard key={p.id} {...p} />
        ))}

        {programmes.errorMessage && (
          <SearchError errorMessage={programmes.errorMessage} />
        )}

        {programmes.isLoading && <SearchResultsSkelton />}

        {programmes.results && (
          <PaginationWrapper>
            {[...Array(pagesCount)].map((_, index) => {
              const page = index + 1;

              return (
                <PageLink
                  key={index}
                  page={page}
                  active={page === programmes.page}
                  search={() =>
                    searchProgrammes(programmesDispatch, programmes.query, page)
                  }
                />
              );
            })}
          </PaginationWrapper>
        )}
      </ul>
    </section>
  );
}
