import React from "react";
import ReactDOM from "react-dom";

import BadgeNew from "./pages/BadgeNew/BadgeNew.js";
import Badges from "./pages/Badges/Badges.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.css";


//const element = <BadgeNew />;

const container = document.getElementById("app");

// ReactDOM.render will render the element that we passed through inside the container.
ReactDOM.render(<Badges />, container);
