# Practice Challenge: Flatiron Pizza

![Pizza Screen Recording](https://curriculum-content.s3.amazonaws.com/react/pizza.gif)

Welcome to your first day at the Flatiron Pizzeria!

Today, you are tasked to building an online menu of all the pizzas that the
pizzeria offers.

## Setup

All the pizza data about can be found in the `db.json` file. We'll
be using `json-server` to create a RESTful API for our database.

Run `npm install` to install our dependencies.

Then, run `npm run server` to start up `json-server` on `http://localhost:3001`.

In another tab, run `npm start` to start up our React app at
`http://localhost:3000`.

## Deliverables

After firing up your server, render the list of pizzas in to the table.

Each row in the table should be a pizza component and when you click the "Edit"
button, it should send the pizza associated with that component into the Pizza
form.

The pizza form will then render the information about the pizza in the form,
which will be editable.

When the form is submitted, the information should be reflected in your table
and persist in the backend.
