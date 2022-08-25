import { Component } from "react";

import { Link } from "react-router-dom";

export default class passwordToggle extends Component {
  constructor() {
    super();

    this.state = {
      hidden: true,
      password: "",
    };

    this.showHide = this.showHide.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  showHide() {
    this.setState({ hidden: !this.state.hidden });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div className="password-wrapper">
        <div className="passwordToggle">
          <h2>Password Toggle</h2>
        </div>
        <input
          type={this.state.hidden ? "password" : "text"}
          value={this.state.password}
          onChange={this.handlePassword}
        />
        <button className="show-hide" onClick={this.showHide}>
          Show Or Hide
        </button>
        <div className="move-button">
          <Link to="/widgets">
            <button className="back-widgets">Back</button>
          </Link>
        </div>
      </div>
    );
  }
}
