import React from "react";
import { Categories, SortPopup, PizzaCard } from "../components";

function Home({ pizzas }) {
  return (
    <div className="content">
      <div className="content__sort">
        <Categories
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup items={["популярности", "цене", "алфавиту"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__grid">
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza.id} {...pizza} />
        ))}
      </div>
    </div>
  );
}

export default Home;
