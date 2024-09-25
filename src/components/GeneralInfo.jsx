import InfoCard from './InfoCard';

export default function GeneralInfo() {
  return (
    <section className="mx-auto my-16 flex max-w-[62.5rem] flex-col gap-10 px-5 md:my-32 md:flex-row md:px-0">
      <InfoCard
        title="🔍 Search"
        text="Find desired degree programmes with a simple search. Then use filters to get exactly what you want."
      />

      <InfoCard
        title="🗺️ Explore"
        text="Explore state universities and institutions, courses and related degree programmes they offer grouped into subjects."
      />

      <InfoCard
        title="🚀 Discover"
        text="Discover eligible degree programmes with z-score based on previours year cut-off marks."
        pending={true}
      />
    </section>
  );
}
