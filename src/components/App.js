import React from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  return (
    <Fragment>
      <Header />
      <PizzaForm />
      <PizzaList />
    </Fragment>
  );
}

export default App;
