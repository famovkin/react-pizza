import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { Header } from "./components";
import { Cart, Home } from "./pages";
import { fetchPizzas } from "./redux/actions/pizzas";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
    </div>
  );
}

export default App;
