import clsx from 'clsx';

export function CenteredContainer({ children, home = false }) {
  return (
    <section
      className={clsx('mx-auto max-w-main px-5 xl:px-0', {
        'my-10': home,
        'my-20': !home,
      })}
    >
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
