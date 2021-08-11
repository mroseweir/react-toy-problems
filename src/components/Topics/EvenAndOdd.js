import React, { Component } from 'react'

export default class EvenAndOdd extends Component {

     
        constructor() {
            super();

            this.state = {
                evenArray: [],
                oddArray: [],
                userInput: ""
            }
        }
        handleChange(a) {
            // console.log(a)
            this.setState({ userInput: a });
        }
        submit(userInput) {
            let numArr = userInput.split(",")
            let even = [];
            let odd = [];

            for (let i = 0; i < numArr.length; i++){
                if(numArr[i] % 2 === 0) {
                    even.push(parseInt(numArr[i], 10))
                } else {
                    odd.push(parseInt(numArr[i], 10))
                }
            }
            this.setState({ evenArray: even, oddArray: odd })
        }
    
    render() {
    return (
        <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={ () => this.submit(this.state.userInput)}>Split!</button>
            <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
            <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
        </div>
    )}
};
