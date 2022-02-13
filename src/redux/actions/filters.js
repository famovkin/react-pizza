const setSortBy = (type) => ({
  type: "SET_SORT_BY",
  payload: type,
});

const setCategory = (categoryIndex) => ({
  type: "SET_CATEGORY",
  payload: categoryIndex,
});

export { setSortBy, setCategory };