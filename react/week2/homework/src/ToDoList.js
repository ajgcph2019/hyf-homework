import React, { Component } from "react";
import Todo from "./ToDo";

class TodoList extends Component {
	constructor() {
		super();
		this.state = {
			todoItems: [
				{ id: 1, description: "Get out of bed" },
				{ id: 2, description: "Brush teeth" },
				{ id: 3, description: "Eat breakfast" },
			],
		};
		this.addTodo = this.addTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
	}
    addTodo = () => {
        const newItem = { id: this.state.todoItems.length + 1,description: "random text" };
        const newTodos = this.state.todoItems.concat([newItem]);
        this.setState({ todoItems: newTodos }, () => {
            console.log('state has been updated');
            
        });
      };
    

    
	deleteTodo(index) {
		let filteredArray = this.state.todoItems.filter((item) => item.id !== index);
		this.setState({ todoItems: filteredArray });
	}
	render() {
		const { todoItems } = this.state;

		return (
			<div>
				<button onClick={this.addTodo}>Add todo</button>
				<ul>
					{todoItems.length
						? todoItems.map((todo) => (
								<Todo
									description={todo.description}
									key={todo.id}
									deleteTodo={() => this.deleteTodo(todo.id)}
								/>
						  ))
						: " No items"}
				</ul>
			</div>
		);
	}
}
export default TodoList;