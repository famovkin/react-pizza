import { SET_SORT_BY, SET_CATEGORY } from '../../types/filters';

const setSortBy = (type: string) => ({
  type: SET_SORT_BY,
  payload: type,
});

const setCategory = (categoryIndex: number) => ({
  type: SET_CATEGORY,
  payload: categoryIndex,
});

export { setSortBy, setCategory };
