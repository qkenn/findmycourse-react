export function FiltersReducer(state, { type, payload }) {
  switch (type) {
    case 'SUBJECT_FILTER':
      return {
        ...state,
        subjectIds: state.subjectIds.includes(payload.id)
          ? state.subjectIds.filter((f) => f !== payload.id)
          : [...state.subjectIds, payload.id],
      };

    case 'UNI_FILTER':
      return {
        ...state,
        universityIds: state.universityIds.includes(payload.id)
          ? state.universityIds.filter((f) => f !== payload.id)
          : [...state.universityIds, payload.id],
      };
    case 'SUBJECT_RESET':
      return {
        ...state,
        subjectIds: [],
      };
    case 'UNI_RESET':
      return {
        ...state,
        universityIds: [],
      };
    default:
      return state;
  }
}
