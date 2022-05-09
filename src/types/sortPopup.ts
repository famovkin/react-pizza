export interface SortPopupProps {
  items: Array<SortItemType>;
  activeSortType: string;
  onClickSortPopup: (type: string) => void;
}

export interface SortItemType {
  name: string;
  type: string;
}
