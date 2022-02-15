import React, { useState } from "react";

const Categories = React.memo(function Categories({ items, onClickItem }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const onClickCategory = (index) => {
    setActiveCategory(index);
    onClickItem(index);
  };
  
  return (
    <div className="categories content__categories">
      <li
        className={activeCategory === null ? "active" : ""}
        onClick={() => onClickCategory(null)}
      >
        Все
      </li>
      {items &&
        items.map((item, index) => {
          return (
            <li
              className={activeCategory === index ? "active" : ""}
              onClick={() => onClickCategory(index)}
              key={`${item}${index}`}
            >
              {item}
            </li>
          );
        })}
    </div>
  );
});

export default Categories;
