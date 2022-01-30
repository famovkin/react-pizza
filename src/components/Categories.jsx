import React, { useState } from "react";

function Cateroties({ items }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const onClickCategory = (index) => setActiveCategory(index);

  return (
    <div className="categories content__categories">
      <li
        className={activeCategory === null ? "active" : ""}
        onClick={() => setActiveCategory(null)}
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
}

export default Cateroties;
