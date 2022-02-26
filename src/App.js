import React from "react";
import { Route } from "react-router-dom";
import { Header } from "./components";
import { Cart, Home } from "./pages";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
    </div>
  );
}

export default App;
