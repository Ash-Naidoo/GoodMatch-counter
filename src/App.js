import { Component } from 'react';
import './App.css';

const final = [];


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name1: '',
      name2: ''
    }
  }

  handleName1Change = (event) => {
    this.setState({
      name1: event.target.value,
     
    })
  }

  handleName2Change = (event) => {
    this.setState({
      name2: event.target.value,
    })
  }

  handleSubmit = event => {

    console.log('Counter --->  ', this.countLetters(`${this.state.name1} matches ${this.state.name2}`)); // this runs first to get the Form data in the function.
    // console.log('final -->  ', final)
    let x = +final.join(""); // convert array to integer
    // console.log('x --> ', x)
    console.log('sumOfNumbers --->  ', this.sumOfNumbers(x)); // calculate the sum and store it in answer
    let answer = this.sumOfNumbers(x);
    // console.log('answer --->  ', answer);

    if(answer < 80) {
      alert(`${this.state.name1} matches ${this.state.name2} ${answer}%`);
    }
    else {
      alert(`${this.state.name1} matches ${this.state.name2} ${answer}%, Good Match`);
    }

    // event.preventDefault();
  };

  letterOnly(e) {

    this.setState({input:e.traget.value.replace(/[^a-zA-Z]/ig,'')});

  }

  countLetters(str) {

    let temp1 = str.replace(/\s/g, ''); //remove spaces
    let temp2 = temp1.toLowerCase(); // convert text to lower case
    let tempArr = temp2.split(''); // split the string to individual indicese int he tempArr array e.g ['j', 'a', 'c', 'k']


    let charMap = new Map();
    const count = 0;
    for (const key of tempArr) {
      charMap.set(key, count); // initialize every character with 0. this would make charMap to be 'h'=> 0, 'e' => 0, 'l' => 0, 
    }

    for (const key of tempArr) {
      let count = charMap.get(key);
      charMap.set(key, count + 1);
    }
    // 'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1

    for (const [key, value] of charMap) {
      if (key) {
        final.push(value); // pushes the values to final array
      }
    }
  }

  sumOfNumbers(num) { // this is recursion way of solving this issue.
    
    var numString = num.toString();
    var newString = "";
    while (numString.length > 1) {
      newString += (parseInt(numString[0]) + parseInt(numString[numString.length - 1])).toString();
      numString = numString.substring(1, numString.length - 1);
    }
    newString += numString;

    if (newString.length > 2) {
      console.log(newString)
      return this.sumOfNumbers(newString);
    } else {
      return newString;
    }
  }

         
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <form id="myForm" onSubmit={this.handleSubmit}>
            <div>
              <label>Name 1</label>
              <br></br>
              <input type='text'placeholder='Only enter text' value={this.state.name1} onChange={this.handleName1Change}/>

            </div>

            <div>
            <br></br>
              <label>Name 2</label>
              <br></br>
              <input type='text'  placeholder='Only enter text' value={this.state.name2} onChange={this.handleName2Change}/>
            </div>
            <br></br>
            <button type='submit'>Submit</button>
            
                        

          </form>

          <br></br>
        </header>
      </div>
    )
  }
}



export default App;