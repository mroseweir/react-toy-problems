import React, { Component } from 'react'

export default class FilterObject extends Component {

    constructor() {
        super();

        this.state = {
            unFilteredArray: [
                {"name": "Michael", "age": 25, "hair color": "Light Brown"},
                {"name": "Wesley", "age": 14, "title": "student"},
                {"name": "Mitchell", "age": 25, "hair": false},
                {"name": "Logan", "age": 28, "facial hair": false}
            ],
            userInput: "",
            filteredArray: []
        }; 
    };
    handleChange(a) {
        console.log(a)
        this.setState({ userInput: a });
    };
    submit(userInput){
        userInput = userInput.toLowerCase()
        let unFiltered = this.state.unFilteredArray;
        let filteredArray = [];

        for (let i = 0; i < unFiltered.length; i++){
            if (unFiltered[i].hasOwnProperty(userInput)) {
                filteredArray.push(unFiltered[i]);
            }
        }
        this.setState({ filteredArray: filteredArray })
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Unfiltered: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" placeholder="filter" onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.submit(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}
