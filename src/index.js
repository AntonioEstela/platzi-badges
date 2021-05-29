import React from "react";
import ReactDOM from "react-dom";

import Badge from './components/Badge';

// React == Javascript
// JSX is a mix between HTML, CSS and javascript that is interpreted before it's send it to the browser

// We can write HTML syntax thanks to JSX wich is imported with React
const element = (
  <Badge />
);

// A great feature that JSX offers is to use javascript expressions into HTML code
// Example:
// const name = 'Antonio';
// <p>Hi, my name is {name}</p>
// this will render the value of name into the <p> tag

// Another way to create an element is using React.createElement
// const elementReact = React.createElement(
//   "h1",
//   {},
//   "Hola, Soy un elemento creado con React.createElement"
// );

const container = document.getElementById("app");

// ReactDOM.render will render the element that we passed through inside the container.
ReactDOM.render(element, container);
