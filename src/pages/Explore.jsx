import { ExploreCard } from '../components/ExploreCard';

export function Explore() {
  return (
    <>
      <main className="bg-neutral-100">
        <section className="mx-auto my-20 max-w-main">
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
        </section>
      </main>
    </>
  );
}
