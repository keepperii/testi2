import {/*computed,*/ observable} from "mobx";

class Todostore {
	@observable todos = ["buy milk", "buy eggs"]
	@observable filter = ""
	//@computed get filteredTodos() {
	//	var matchesFilter = new RegExp(this.filter, "i")
	//	return this.todos.filter(todo => !this.filter || matchesFilter.test(todo))
	//}


//var store = window.store = new Todostore
//createTodo(value) {
///	this.todos.push(value)
//}

}
export default new store 

//autorun(() => {
//	console.log(store.filter)
//	console.log(store.todos[0])
//})