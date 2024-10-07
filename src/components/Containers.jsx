export function Section({ children }) {
  return (
    <section className="mx-auto my-20 max-w-main px-5 xl:px-0">
      {children}
    </section>
  );
}

export function TwoColGrid({ children }) {
  return (
    <ul className="mt-5 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
      {children}
    </ul>
  );
}
