export interface CategoriesProps {
  items: Array<string>;
  onClickCategory: (index: number | null) => void;
  activeCategoryIndex: number;
}
