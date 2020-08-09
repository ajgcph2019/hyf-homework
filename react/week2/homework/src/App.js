import React, { Component } from "react";
import Timer from "./Timer";
import TodoList from "./ToDoList";

class App extends Component {
	render() {
		return (
			<div>
				<Timer />
				<TodoList />
			</div>
		);
	}
}
export default App;