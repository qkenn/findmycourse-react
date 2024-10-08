export default function Features() {
  return (
    <section className="mx-auto my-16 flex max-w-main flex-col gap-10 px-5 md:my-32 md:flex-row md:justify-between xl:px-0">
      <Feature type="search" />
      <Feature type="explore" />
      <Feature type="discover" />
    </section>
  );
}

function Feature({ type }) {
  const features = [
    {
      type: 'search',
      title: '🔍 Search',
      text: 'Find desired degree programmes with a simple search. Then use filters to get exactly what you want.',
    },
    {
      type: 'explore',
      title: '🗺️ Explore',
      text: 'Explore state universities and institutions, courses and related degree programmes they offer grouped into subjects.',
    },
    {
      type: 'discover',
      title: '🚀 Discover',
      text: 'Discover eligible degree programmes with z-score based on previours year cut-off marks.',
      pending: true,
    },
  ];
  const feature = features.find((f) => f.type === type);

  return (
    <div className="flex-1 rounded-sm bg-white p-10 text-center md:p-8">
      <h3 className="text-2xl font-semibold">{feature?.title}</h3>
      {feature?.pending && (
        <div className="text-center text-neutral-700">(pending feature)</div>
      )}
      <p className="mt-3 text-neutral-700">{feature?.text}</p>
    </div>
  );
}
