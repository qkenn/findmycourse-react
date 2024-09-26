export function NotFound() {
  return (
    <main>
      <section className="mx-auto my-20 max-w-main px-5">
        <div className="mx-auto max-w-56">
          <img src="/page-not-found.svg" />
        </div>
        <div className="mt-3 text-center">
          <h3 className="text-xl md:text-3xl">404 | Page not found</h3>
          <p className="mt-1">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
      </section>
    </main>
  );
}
