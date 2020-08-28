import React, { Component } from "react";
import Todo from "./ToDo";
import uuid from "uuid";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { id: uuid(4), description: "Get out of bed" },
        { id: uuid(4), description: "Brush teeth" },
        { id: uuid(4), description: "Eat breakfast" },
      ],
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  addTodo = () => {
    const newItem = {
      id: uuid(4),
      description: "random text",
    };
    const newTodos = [...this.state.todoItems, newItem];
    this.setState({ todoItems: newTodos }, () => {
      console.log("state has been updated");
    });
  };

  deleteTodo(index) {
    let filteredArray = this.state.todoItems.filter(
      (item) => item.id !== index
    );
    this.setState({ todoItems: filteredArray });
  }
  render() {
    const { todoItems } = this.state;

    return (
      <div>
        <button onClick={this.addTodo}>Add todo</button>
        <ul>
          {todoItems.length
            ? todoItems.map((todo, index) => (
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
