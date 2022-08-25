import { Component } from "react";
import { Link } from "react-router-dom";

export default class Counter extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(amt) {
    this.setState((state) => ({
      count: amt ? state.count + amt : 0,
    }));
  }

  render() {
    return (
      <div className="counter-wrapper">
        <div className="counter">
          <h2>Counter Widget</h2>
          <div>
            <h4>{this.state.count}</h4>
            <button className="decrease" onClick={() => this.handleClick(-1)}>
              Decrease
            </button>
            <button className="reset" onClick={() => this.handleClick(0)}>
              Reset
            </button>
            <button className="increase" onClick={() => this.handleClick(1)}>
              Increase
            </button>
          </div>
        </div>
        <div className="move-button">
          <Link to="/widgets">
            <button className="back-widgets">Back</button>
          </Link>
        </div>
      </div>
    );
  }
}
