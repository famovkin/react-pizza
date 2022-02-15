import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Categories, PizzaCard, SortPopup } from "../components";
import { setCategory } from "../redux/actions/filters";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const sortItems = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzasReducer }) => pizzasReducer.items);

  const onSelectCategory = useCallback(
    (index) => dispatch(setCategory(index)),
    [dispatch]
  );

  return (
    <div className="content">
      <div className="content__sort">
        <Categories items={categoryNames} onClickItem={onSelectCategory} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__grid">
        {items && items.map((pizza) => <PizzaCard key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
}

export default Home;
