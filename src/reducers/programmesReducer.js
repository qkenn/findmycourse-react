export function programmesReducer(programmes, { type, payload }) {
  switch (type) {
    case 'SEARCH_START':
      return {
        isLoading: true,
      };
    case 'SEARCH_SUCCESS':
      console.log(payload.data);

      return {
        query: payload.q,
        isLoading: false,
        results: payload.data.programmes,
        count: payload.data.count,
        pageSize: payload.data.pageSize,
        page: payload.data.page,
      };
    case 'SEARCH_ERROR':
      return {
        isLoading: false,
        searchError: payload.error,
        query: payload.q,
      };
    default:
      return programmes;
  }
}
