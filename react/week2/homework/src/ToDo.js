import React, { Component } from "react";

class Todo extends Component {
	constructor() {
		super();
		this.state = {
			checked: false,
		};
		this.toggleChecked = this.toggleChecked.bind(this);
	}
	toggleChecked() {
		this.setState({ checked: !this.state.checked });
	}

	render() {
		const { id, description } = this.props;
		const { checked } = this.state;
		return (
			<div>
				<li>
					{checked === true ? (
						<span style={{ textDecoration: "line-through" }}>
							{description}
						</span>
					) : (
						description
					)}{" "}
					<input onClick={this.toggleChecked} type="checkbox" value={checked} />{" "}
					<button onClick={this.props.deleteTodo.bind(this, id)}>Delete</button>
				</li>
			</div>
		);
	}
}

export default Todo;