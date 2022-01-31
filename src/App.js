import { Header, Categories, SortPopup } from "./components";
import PizzaCard from "./components/PizzaCard";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="content__sort">
          <Categories
            items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
          />
          <SortPopup items={["популярности", "цене", "алфавиту"]} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__grid">
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
        </div>
      </div>
    </div>
  );
}

export default App;
