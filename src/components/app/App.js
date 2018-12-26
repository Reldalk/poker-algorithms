import React, { Component } from 'react';
import './App.css';
import {calculateChances} from '../algorithms/simple'
const maskArray = [1,2,4,8,16,32,64,128,256,512,1024,2048, 4096]
const cardArray = [2,3,4,5,6,7,8,9, 10,'J','Q', 'K', 'A'];
const suitArray = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];
const userCardArray = ['cardValueOne', 'cardValueTwo', 'cardValueThree', 'cardValueFour', 'cardValueFive'];
const divContainerArray = ['cardContainerOne', 'cardContainerTwo', 'cardContainerThree', 'cardContainerFour'];

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      currentValues: [1,1024,4,2048,512],
      currentSuits: [1,2,4,8,4],
    }
  }

  handleSuitChange(event, i){
    let tempArray = this.state.currentSuits;
    for(let j = 0; j < 5; j++){
      if(j === i){
        tempArray[i] = event.target.value;
      }
    }
    this.setState({
      currentSuits : tempArray
    })
  }

  handleValueChange(event, i){
    console.log(`card ${i} value = ${event.target.value}`);
    let tempArray = this.state.currentValues;
    for(let j = 0; j < 5; j++){
      if(j === i){
        tempArray[i] = event.target.value;
      }
    }
    this.setState({
      currentValues: tempArray,
    })
  }

  changeSuitArray(){
    console.log(this.suitArray);
  }

  render() {
    return (
      <div>
        {userCardArray.map((element, i)=> (
          <div className={divContainerArray[i]}>
            <select onChange={e => this.handleSuitChange(e, i)}>
            {
              suitArray.map((suitType, j) => (
                //Card Suit
                <option value={maskArray[j]}>{suitType}</option>
              ))
            }
            </select>
            <select onChange={e => this.handleValueChange(e, i)}>
            {
              maskArray.map((mask,j) => (
                //Card Value (2,3,4,5,J,Q,K)
                <option value={mask}>{cardArray[j]}</option>
              ))
            }
            </select>
          </div>
        ))}
        <button type="button" onClick={e => calculateChances(this.state.currentSuits, this.state.currentValues)}>Submit for odds</button>
      </div>
    )
  }
}

export default App;
