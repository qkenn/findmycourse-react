export function SearchError({ status, message }) {
  let Component;
  if (status === 404) {
    Component = NotFound;
  } else if (message === 'Failed to fetch') {
    Component = ConnectionError;
  } else {
    Component = DefaultError;
  }

  return (
    <div className="px-5">
      <Component />
    </div>
  );
}

function NotFound() {
  return (
    <>
      <div className="mx-auto max-w-56">
        <img src="/not-found.svg" />
      </div>
      <h4 className="mt-3 text-center">
        Your search criteria didn&apos;t match any courses or programmes.
      </h4>
    </>
  );
}

function ConnectionError() {
  return (
    <>
      <div className="mx-auto max-w-56">
        <img src="/bad-connection.svg" />
      </div>
      <h4 className="mt-3 text-center">Network Error</h4>
    </>
  );
}

function DefaultError() {
  return (
    <>
      <div className="mx-auto max-w-56">
        <img src="/default-error.svg" />
      </div>
      <h4 className="mt-3 text-center">Something went wrong</h4>
    </>
  );
}
