export function searchProgrammes(
  programmesDispatch,
  q,
  page = 1,
  university = [],
  subject = []
) {
  programmesDispatch({ type: 'SEARCH_START' });

  // getting params
  const params = new URLSearchParams({ q, page });
  if (university.length > 0) {
    params.append('university', university.join(','));
  }
  if (subject.length > 0) {
    params.append('subject', subject.join(','));
  }

  fetch('http://localhost:8080/api/search?' + params.toString(), {
    mode: 'cors',
  })
    .then((res) => {
      if (res.status >= 400) {
        switch (true) {
          case res.status === 404:
            throw new Error('No Match');
          case res.status >= 400 && res.status < 500:
            throw new Error('Client Error');
          case res.status >= 500 && res.status < 600:
            throw new Error('Server Error');
          default:
            throw new Error('Something went wrong');
        }
      }

      return res.json();
    })
    .then((data) => {
      programmesDispatch({ type: 'SEARCH_SUCCESS', payload: { data, q } });
    })
    .catch((e) => {
      programmesDispatch({
        type: 'SEARCH_ERROR',
        payload: { error: e.message, q },
      });
    });
}
