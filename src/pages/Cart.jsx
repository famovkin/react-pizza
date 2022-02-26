import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components";
import cartEmptyImage from "../images/cartEmptyImage.jpg";

function Cart() {
  return (
    <div className="container">
      <div className="cart cart__type_empty">
        <h1>Корзина пустая</h1>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу. <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={cartEmptyImage} alt="Пустая корзина"></img>
        <Link to="/">
          <Button className="button__black">Вернуться назад</Button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
