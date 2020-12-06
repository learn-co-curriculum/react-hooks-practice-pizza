import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((r) => r.json())
      .then(setPizzas);
  }, []);

  function handleChangeForm(name, value) {
    setSelectedPizza({
      ...selectedPizza,
      [name]: value,
    });
  }

  function handleEditPizza(updatedPizza) {
    const updatedPizzas = pizzas.map((pizza) =>
      pizza.id === updatedPizza.id ? updatedPizza : pizza
    );
    setSelectedPizza(updatedPizza);
    setPizzas(updatedPizzas);
  }

  return (
    <>
      <Header />
      <PizzaForm
        pizza={selectedPizza}
        onChangeForm={handleChangeForm}
        onEditPizza={handleEditPizza}
      />
      <PizzaList pizzas={pizzas} onSelectPizza={setSelectedPizza} />
    </>
  );
}

export default App;
