import React from "react";

function PizzaForm() {
  return (
    <div className="form-row">
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Pizza Topping"
        />
      </div>
      <div className="col">
        <select className="form-control">
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="type"
            value="Vegetarian"
          />
          <label className="form-check-label">Vegetarian</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="type"
            value="Not Vegetarian"
          />
          <label className="form-check-label">Not Vegetarian</label>
        </div>
      </div>
      <div className="col">
        <button type="submit" className="btn btn-success" onClick={console.log}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default PizzaForm;
