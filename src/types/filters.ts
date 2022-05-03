export interface FiltersState {
  category: number | null;
  sortBy: string;
}

export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_CATEGORY = 'SET_CATEGORY';

export interface SetSortByAction {
  type: typeof SET_SORT_BY;
  payload: 'popular' | 'price';
}

export interface SetCategoryAction {
  type: typeof SET_CATEGORY;
  payload: number;
}

export type FiltersAction = SetCategoryAction | SetSortByAction;
