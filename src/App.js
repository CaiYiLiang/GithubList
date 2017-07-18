import React, { Component } from 'react';
import {fetchUser} from './actions';
import { connect } from 'react-redux';
import './App.css';
import User from './containers/User'

class App extends Component {
  componentWillMount() {
    this.props.fetchUser("caiyiliang");
  }

  render() {
    return (
      <div className="App">
        <User></User>
      </div>
    );
  }
}

export default App = connect(null, {fetchUser})(App);