import '../css/style.css';
import React from "react";
import ReactDOM from "react-dom";

import Todolist from "./todolist";
import Todostore from "./todostore";

const app = document.getElementById("app")

ReactDOM.render(<Todolist store={store}/>, app)

/*import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';

import kuva1 from '../assets/kuva1.jpg';

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react
	<img src={ kuva1 } alt='maisema kuva' />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
*/

