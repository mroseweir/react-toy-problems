import React, { Component } from "react";

export default class Sub extends Component {
  constructor() {
    super();

    this.state = {
      num1: 0,
      num2: 0,
      sum: null,
    };
  }

  handleChangeA(a) {
    this.setState({ num1: Number(a) });
    console.log(a);
  }

  handleChangeB(b) {
    this.setState({ num2: Number(b) });
    console.log(b);
  }

  submit(num1, num2) {
    this.setState({ sum: num1 + num2 });
  }

  render() {
    return (
      <div className="puzzleBox SumPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          onChange={(e) => this.handleChangeA(e.target.value)}
        ></input>
        <input
          className="inputLine"
          onChange={(e) => this.handleChangeB(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.submit(this.state.num1, this.state.num2)}
        ></button>
        <span className="resultsBox">{this.state.sum}</span>
      </div>
    );
  }
}
