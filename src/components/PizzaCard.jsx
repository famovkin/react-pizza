import React from "react";
import { Button } from "../components";

function PizzaCard() {
  return (
    <div className="pizza-card">
      <img
        className="pizza-card__image"
        src="https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg"
        alt="Пепперони Фреш с перцем"
      />
      <h3 className="pizza-card__title">Пепперони Фреш с перцем</h3>
      <div className="pizza-card__settings">
        <ul>
          <li className="active">тонкое</li>
          <li className="disabled">традиционное</li>
        </ul>
        <ul>
          <li className="active">26 см.</li>
          <li className="disabled">30 см.</li>
          <li>40 см.</li>
        </ul>
      </div>
      <div className="pizza-card__buy">
          <p className="pizza-card__price"> от 500 &#8381;</p>
          <Button className="button__add" outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
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

export default PizzaCard;
