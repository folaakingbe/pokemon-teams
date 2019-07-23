import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Games from './components/Games';
import Game from './components/Game';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      // Outer most element
      // : is a param that means "any"
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <h1>Pokemon Teams</h1>
            <Route exact path="/" component={Games} />
            <Route exact path="/game/:title" component={Game} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
