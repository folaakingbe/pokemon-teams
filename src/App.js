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

class App extends Component {
  render () {
    return <Fragment>
      <Game style={{backgroundColor: "red"}}/>
      <Game style={{backgroundColor: "blue"}}/>
    </Fragment>
  }
}

export default App;
