import React from "react";
import { observer} from "mobx-react"

@observer

export default class Todolist extends React.Component {
	filter(e) {
		this.props.store.filter = e.target.value
	}
	render() {
		const { filter, todos} = this.props.store

		const Todolis = todos.map(todo => (
			<li>{todo}</li>
		))

		return ( 
			<div>
				<h1>Kauppalista</h1>
				
					{filter}
				<ul>{Todolis}</ul>
				}
			</div>
		);
	}
}


  //<h1>{this.props.store.todos[0]}</h1>
				//{filter}
				//<div>{filter}</div>
				//<input classname = "filter" value={filter} onChange={this.filter.bind(this)
   