export function programmesReducer(state, { type, payload }) {
  switch (type) {
    case 'SEARCH_START':
      return {
        isLoading: true,
      };
    case 'SEARCH_SUCCESS':
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
        error: payload.error,
        query: payload.q,
      };
    default:
      throw new Error('invalid action');
  }
}
