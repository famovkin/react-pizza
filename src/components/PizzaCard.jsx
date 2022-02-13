import React from "react";
import { Button } from "../components";
import { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function PizzaCard({ name, imageUrl, price, types, sizes }) {
  const availableTypes = ["тонкое", "традиционное"];
  const availableSizes = [26, 30, 40];
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const changeType = (index) => setActiveType(index);
  const changeSize = (index) => setActiveSize(sizes[index]);

  return (
    <div className="pizza-card">
      <img
        className="pizza-card__image"
        src={imageUrl}
        alt={name}
      />
      <h3 className="pizza-card__title">{name}</h3>
      <div className="pizza-card__settings">
        <ul>
          {availableTypes.map((type, index) => (
            <li
              key={type}
              onClick={() => changeType(index)}
              className={classNames({
                active: activeType === index,
                disabled: !types.includes(index),
              })}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((size, index) => (
            <li
              key={size}
              onClick={() => changeSize(index)}
              className={classNames({
                active: activeSize === sizes[index],
                disabled: !sizes.includes(size),
              })}
            >
              {size} см
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-card__buy">
        <p className="pizza-card__price">от {price} &#8381;</p>
        <Button className="button__add" outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
        </Button>
      </div>
    </div>
  );
}

PizzaCard.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
}

PizzaCard.defaultProps = {
  name: 'Название пиццы',
  price: 0,
  types: [],
  sizes: [],
}

export default PizzaCard;
