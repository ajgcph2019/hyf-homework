import React, { Component } from "react";
import Timer from "./components/Timer";
import TodoList from "./components/ToDoList";

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
