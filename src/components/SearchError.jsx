export default function SearchError({ errorMessage }) {
  let image = <img src="/default-error.svg" />;
  let message = errorMessage;
  switch (errorMessage) {
    case 'Failed to fetch':
      image = <img src="/bad-connection.svg" />;
      message = 'Network Error';
      break;
    case 'No Match':
      image = <img src="/not-found.svg" />;
      message = "Your search criteria didn't match any courses or programmes.";
      break;
  }

  return (
    <div>
      <div className="mx-auto max-w-56">{image}</div>
      <p className="mt-3 px-5 text-center">{message}</p>
    </div>
  );
}
