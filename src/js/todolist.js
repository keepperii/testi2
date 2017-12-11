import React from "react";
import { observer} from "mobx-react"

@observer

export default class Todolist extends React.Component {
	//createNew(e) {
	//	if(e.which === 13) {
	//		this.props.store.createTodo(e.target.value)
	//		e.target.value = ""
	//	}
	//}

	filter(e) {
		this.props.store.filter = e.target.value
	}
	render() {
		const { filter/*, filteredTodos*/, todos} = this.props.store

		const Todolis = todos.map(todo => (
			<li>{todo}</li>
		))

		return ( 
			<div>
				<h1>Kauppalista</h1>
					{filter}
					//<input className = "create" onKeyPress={this.createNew.bind(this)}/>
					<input className = "filter" value={filter} onChange={this.filter.bind(this)}/>
					<ul>{Todolis}</ul>
			</div>
		);
	}
}

//<div>{filter}</div>
  //<h1>{this.props.store.todos[0]}</h1>
				//{filter}
				//<div>{filter}</div>
				//<input classname = "filter" value={filter} onChange={this.filter.bind(this)
   