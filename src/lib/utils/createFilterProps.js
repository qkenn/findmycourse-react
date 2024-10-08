export const createFilterProps = ({
  title,
  defaultOptionText,
  options,
  ids,
  dispatchType,
  resetType,
  searchFunction,
  query,
  otherIds,
  filtersDispatch,
  programmesDispatch,
}) => ({
  ids,
  title,
  defaultOptionText,
  options,
  selected: (id) => ids.includes(id),
  dispatch: (id) => filtersDispatch({ type: dispatchType, payload: { id } }),
  reset: () => filtersDispatch({ type: resetType }),
  research: (id) => {
    searchFunction(
      programmesDispatch,
      query,
      1,
      ids.includes(id) ? ids.filter((f) => f !== id) : [...ids, id],
      otherIds
    );
  },
});
