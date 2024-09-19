export function Loading({ cardsCount, page }) {
  if (page === 'home') {
    return Array(cardsCount)
      .fill(null)
      .map((_, index) => (
        <div
          key={index}
          className="h-[200px] animate-pulse rounded-sm bg-white"
        ></div>
      ));
  }

  if (page === 'explore') {
    return (
      <div className="mt-5 grid grid-cols-2 gap-12">
        {Array(cardsCount)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="h-[150px] animate-pulse rounded-sm bg-white"
            ></div>
          ))}
      </div>
    );
  }

  if (page === 'details') {
    return (
      <div className="mt-5 h-[72vh] animate-pulse rounded-sm bg-white"></div>
    );
  }
}
