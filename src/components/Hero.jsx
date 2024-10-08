import SearchForm from './search/SearchForm';

export function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[55dvh] max-w-main flex-col justify-center px-5 md:px-0">
        <h1 className="text-center text-4xl/tight font-semibold md:text-[2.7rem]">
          Search for degree programmes
        </h1>

        <SearchForm />
      </div>
    </section>
  );
}
