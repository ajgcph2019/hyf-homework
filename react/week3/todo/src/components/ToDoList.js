import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import PropTypes from "prop-types";
import uuid from "uuid";

class ToDoList extends Component {
	constructor() {
		super();
		this.state = {
			todoList: [],
			description: "",
			deadline: "",
			completed: false,
		};
		this.fetchList = this.fetchList.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.addItem = this.addItem.bind(this);
		this.editItem = this.editItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	fetchList() {
		fetch(
			"https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
		)
			.then((response) => response.json())
			.then((datafromUrl) => {
				this.setState({
					todoList: datafromUrl,
				});
			})
			.catch((err) => console.log(err));
	}
	handleInputChange(event) {
		event.stopPropagation();
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	addItem(event) {
		event.preventDefault();
		const newItem = {
			id: uuid(4),
			description: this.state.description,
			deadline: this.state.deadline,
		};
		console.log(newItem);
		if (newItem !== "") {
			const newItems = [...this.state.todoList, newItem];
			this.setState({
				id: uuid(4),
				todoList: newItems,
				description: "",
				deadline: "",
			});
		}
	}

	deleteItem(key) {
		console.log(key);
		const filteredItems = this.state.todoList.filter((item) => item.id !== key);
		this.setState({
			todoList: filteredItems,
		});
	}
	editItem(id) {
		this.setState((prevState) => {
			const updatedTodos = prevState.todoList.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						description: this.state.description,
						deadline: this.state.deadline,
					};
				}
				return todo;
			});
			return {
				todoList: updatedTodos,
				description: "",
				deadline: "",
			};
		});
	}

	componentDidMount() {
		this.fetchList();
	}
	render() {
		const listItems = this.state.todoList.map((todo, index) => {
			return (
				<ToDoItem
					key={index}
					item={todo}
					description={todo.description}
					deadline={todo.deadline}
					deleteItem={() => this.deleteItem(todo.id)}
					editItem={() => this.editItem(todo.id)}
				/>
			);
		});
		return (
			<div>
				<h1> Todo List</h1>
				<form onSubmit={this.addItem}>
					<label>
						Todo description
						<input
							type="text"
							name="description"
							value={this.state.description}
							onChange={this.handleInputChange}
						/>
					</label>
					<br />
					<label>
						Deadline
						<input
							type="date"
							name="deadline"
							value={this.state.deadline}
							onChange={this.handleInputChange}
						/>
					</label>
					<br />
					<button type="submit">Add Todo</button>
					{this.state.todoList.length === 0 ? <p>No items</p> : null}
				</form>
				{listItems}
			</div>
		);
	}
}
ToDoList.prototypes = {
	id: PropTypes.number,
	description: PropTypes.string.isRequired,
};
export default ToDoList;
