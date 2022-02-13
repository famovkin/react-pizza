import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Header } from "./components";
import { Cart, Home } from "./pages";

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((res) => res.json())
      .then((data) => setPizzas(data.pizzas));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Route exact path="/" render={() => <Home pizzas={pizzas} />} />
      <Route path="/cart" component={Cart} />
    </div>
  );
}

export default App;
