import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Categories,
  PizzaCard,
  PizzaLoadingCard,
  SortPopup,
} from "../components";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

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
  { name: "алфавиту", type: "name" },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzasReducer }) => pizzasReducer.items);
  const cartItems = useSelector(({ cartReducer }) => cartReducer.items);
  const isLoaded = useSelector(({ pizzasReducer }) => pizzasReducer.isLoaded);
  const { category, sortBy } = useSelector(
    ({ filterReducer }) => filterReducer
  );

  const onSelectCategory = useCallback(
    (index) => dispatch(setCategory(index)),
    [dispatch]
  );

  const onSelectSortType = useCallback(
    (type) => dispatch(setSortBy(type)),
    [dispatch]
  );

  const onAddPizzaToCart = (pizzaObj) => {
    dispatch(addPizzaToCart(pizzaObj));
  };

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [dispatch, category, sortBy]);

  return (
    <div className="content">
      <div className="content__sort">
        <Categories
          items={categoryNames}
          onClickCategory={onSelectCategory}
          activeCategoryIndex={category}
        />
        <SortPopup
          activeSortType={sortBy}
          items={sortItems}
          onClickSortPopup={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__grid">
        {isLoaded
          ? items.map((pizza) => (
              <PizzaCard
                key={pizza.id}
                onAddPizzaToCart={onAddPizzaToCart}
                pizzasInCart={cartItems[pizza.id] && cartItems[pizza.id].length}
                isLoaded={isLoaded}
                {...pizza}
              />
            ))
          : Array(10)
              .fill(0)
              .map((number, index) => <PizzaLoadingCard key={index} />)}
      </div>
    </div>
  );
}

export default Home;
