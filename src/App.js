import { Header, Categories, SortPopup } from "./components";

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
      </div>
    </div>
  );
}

export default App;
