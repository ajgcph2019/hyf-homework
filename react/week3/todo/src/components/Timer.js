import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.incrementTime = this.incrementTime.bind(this);
  }
  incrementTime() {
    this.setState((state) => ({
      count: this.state.count + 1,
    }));
  }
  componentDidMount() {
    this.interval = setInterval(() => this.incrementTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <p>You have used {count} seconds on this website</p>
      </div>
    );
  }
}
export default Timer;
