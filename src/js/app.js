import '../css/style.css';
import React from "react";
import ReactDOM from "react-dom";

import Todolist from "./todolist";
import Todostore from "./todostore";

const app = document.getElementById("app")

ReactDOM.render(<Todolist store={store}/>, app)


