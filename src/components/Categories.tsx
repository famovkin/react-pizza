import { memo, FC } from 'react';

import { CategoriesProps } from '../types/categories';

const Categories: FC<CategoriesProps> = ({
  items,
  onClickCategory,
  activeCategoryIndex,
}) => {
  return (
    <ul className='categories content__categories'>
      <li
        className={activeCategoryIndex === null ? 'active' : ''}
        onClick={() => onClickCategory(null)}
      >
        Все
      </li>
      {items &&
        items.map((item, index) => {
          return (
            <li
              className={activeCategoryIndex === index ? 'active' : ''}
              onClick={() => onClickCategory(index)}
              key={`${item}${index}`}
            >
              {item}
            </li>
          );
        })}
    </ul>
  );
};

export default memo(Categories);
