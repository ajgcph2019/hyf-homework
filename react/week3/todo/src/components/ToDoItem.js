import React, { Component } from "react";

const List = (props) => <div>{props.children}</div>;

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      isChecked: false,
      isEdited: false,
    };
    this.toggleChecked = this.toggleChecked.bind(this);
  }
  toggleChecked() {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    const { description, deadline, id } = this.props;
    const { isChecked } = this.state;

    return (
      <div>
        <List>
          <li>
            {isChecked ? (
              <span style={{ textDecoration: "line-through" }}>
                {description} | {deadline}
              </span>
            ) : (
              description + " | " + deadline
            )}
            <input
              onClick={this.toggleChecked}
              type="checkbox"
              value={isChecked}
            />{" "}
            <button onClick={this.props.deleteItem.bind(this, id)}>
              Delete
            </button>{" "}
            {description ? (
              <button
                type="button"
                onClick={this.props.editItem}
                value={this.props.description}
              >
                Edit
              </button>
            ) : (
              <button
                type="button"
                onClick={this.props.editItem}
                value={this.props.description}
              >
                Update
              </button>
            )}
          </li>
        </List>
      </div>
    );
  }
}

export default ToDoItem;
