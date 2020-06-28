import "regenerator-runtime";

import $ from "jquery/dist/jquery.slim.js";
import "popper.js/dist/popper.js";
import "bootstrap/dist/js/bootstrap.bundle.js";

import "./styles/app.css";
import "bootstrap/dist/css/bootstrap.css";

import "./scripts/components/appbar.js";
import "./scripts/components/jumbotron.js";
import "./scripts/components/searchbar.js";
import "./scripts/components/cardimage.js";
import "./scripts/components/meal-list.js";
import "./scripts/components/meal-item.js";

import main from "./scripts/view/main.js";

document.addEventListener("DOMContentLoaded", main);
