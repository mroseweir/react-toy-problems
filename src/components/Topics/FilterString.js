import React, { Component } from 'react'

export default class filterString extends Component {
    constructor() {
        super();

        this.state = {
            unFilteredArray: ["this", "is", "a", "test"],
            userInput : "",
            filteredArray: []
        }
    }
    handleChange(a) {
        console.log(a)
        this.setState({ userInput: a });
    };
    submit(userInput){
        let arr = this.state.unFilteredArray;
        let newFilteredArray = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === userInput){
                newFilteredArray.push(arr[i])
            }
        }
        this.setState({ filteredArray: newFilteredArray });
        console.log(this.state.unFilteredArray)
        console.log(newFilteredArray);
    }
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.submit(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )      
    }
}

