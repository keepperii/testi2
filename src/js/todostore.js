import {autorun, observable} from "mobx";

class Todostore {
	@observable todos = ["buy milk", "buy eggs"]
	@observable filter = ""
}

var store = window.store = new Todostore

export default store 

autorun(() => {
	console.log(store.filter)
	console.log(store.todos[0])
})