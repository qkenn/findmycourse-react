import { useNavigation } from 'react-router-dom';
import { ExploreCard } from '../components/ExploreCard';
import { Loading } from '../components/Loading';
import { Breadcrumb } from '../components/BreadCrumb';

export function ExplorePage() {
  const { state } = useNavigation();

  return (
    <>
      <main className="bg-neutral-100">
        <section className="mx-auto my-20 max-w-main">
          {state === 'loading' ? (
            <Loading cardsCount={12} page="explore" />
          ) : (
            <ul className="grid grid-cols-2 gap-12">
              <ExploreCard
                url="subjects"
                desc="All courses offered by universities grouped into relevent subjects"
              />
              <ExploreCard
                url="courses"
                desc="List of courses offered by universities"
              />
              <ExploreCard
                url="programmes"
                desc="List of all available degree programmes"
              />
              <ExploreCard
                url="universities"
                desc="List of all state universites and institutes"
              />
            </ul>
          )}
        </section>
      </main>
    </>
  );
}
