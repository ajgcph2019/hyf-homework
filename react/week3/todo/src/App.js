import React from "react";
import Timer from "./components/Timer";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Timer />
      <ToDoList />
    </div>
  );
}

export default App;
