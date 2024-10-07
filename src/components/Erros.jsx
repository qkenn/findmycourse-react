import { CenteredContainer } from './Containers';

export function AppErrorPage() {
  return (
    <main>
      <CenteredContainer>
        <h1 className="text-center text-3xl">❌ Application Error</h1>
      </CenteredContainer>
    </main>
  );
}

export function NotFoundPage() {
  return (
    <main>
      <CenteredContainer>
        <div className="mx-auto max-w-56">
          <img src="/page-not-found.svg" />
        </div>
        <div className="mt-3 text-center">
          <h3 className="text-xl md:text-3xl">404 | Page not found</h3>
          <p className="mt-1">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
      </CenteredContainer>
    </main>
  );
}
