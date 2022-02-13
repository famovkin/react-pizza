import React from "react";
import { Categories, SortPopup, PizzaCard } from "../components";
import { useSelector } from "react-redux";

function Home() {
  const items = useSelector(({ pizzasReducer }) => pizzasReducer.items);

  return (
    <div className="content">
      <div className="content__sort">
        <Categories
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup
          items={[
            { name: "популярности", type: "popular" },
            { name: "цене", type: "price" },
            { name: "алфавиту", type: "alphabet" },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__grid">
        {items && items.map((pizza) => <PizzaCard key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
}

export default Home;
