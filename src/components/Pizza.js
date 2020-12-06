import React from "react";

function Pizza({ pizza, onSelectPizza }) {
  const { topping, size, vegetarian } = pizza;

  function handleClick() {
    onSelectPizza(pizza);
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Vegetarian" : "Not Vegetarian"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
