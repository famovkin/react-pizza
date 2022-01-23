import { Header, Categories } from "./components";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="content__sort">
          <Categories
            items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
