import PropTypes from "prop-types";
import React from "react";

const Categories = React.memo(function Categories({
  items,
  onClickCategory,
  activeCategoryIndex,
}) {
  return (
    <div className="categories content__categories">
      <li
        className={activeCategoryIndex === null ? "active" : ""}
        onClick={() => onClickCategory(null)}
      >
        Все
      </li>
      {items &&
        items.map((item, index) => {
          return (
            <li
              className={activeCategoryIndex === index ? "active" : ""}
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

Categories.propTypes = {
  //activeCategoryIndex: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = {
  activeCategoryIndex: null,
  items: [],
};

export default Categories;
