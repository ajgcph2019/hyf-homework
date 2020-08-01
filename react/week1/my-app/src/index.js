import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const root = document.getElementById("root");

const arrayTodolist = [
  {
    description: " Get out of bed",
    deadline: "Wed Sep 13 2017",
  },
  {
    description: "Brush teeth",
    deadline: "Thu Sep 14 2017",
  },
  {
    description: "Eat breakfast",
    deadline: "Fri Sep 15 2017",
  },
];
class Header extends React.Component {
  render() {
    return <h1>Todo List</h1>;
  }
}

class TodoList extends React.Component {
  render() {
    const array = this.props.list;
    const result = array.map((item) => {
      return (
        <li>
          {item.description}, {item.deadline}
        </li>
      );
    });
    return <ul>{result}</ul>;
  }
}
class Container extends React.Component {
  render() {
    return (
      <div className="list">
        <Header />
        <TodoList list={arrayTodolist} />
        <Footer />
      </div>
    );
  }
}
class Footer extends React.Component {
  render() {
    return <h4>React week 1 homework</h4>;
  }
}
ReactDOM.render(<Container />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
