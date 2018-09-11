import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

var color = ["red", "blue"];
var name = ["Ruby", "Colosseum"];
var trainer = ["Brendan", "Wes"]
var ID = [65530, 17041];
var teams = {};
teams[0] = ["Blaziken", "Mightyena", "Groudon", "Regice", "Magneton", "Wailord"];
teams[1] = ["Espeon", "Hariyama", "Jumpluff", "Entei", "Suicune", "Raikou", "Umbreon"];
console.log(teams[0]);

var games = [];
for (let i=0; i < color.length; i++) {
  games.push(<Game name={name[i]} 
                    ID={ID[i]}
                    trainer={trainer[i]} 
                    team={teams[i]}
                    style={{backgroundColor: color[i]}}/>);
}

class App extends Component {
  render () {
    return <Fragment>
      {games}
      {/* <Game style={{backgroundColor: color[0]}}/>
      <Game style={{backgroundColor: color[1]}}/> */}
    </Fragment>
  }
}

export default App;
