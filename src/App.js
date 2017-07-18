import React, { Component } from 'react';
import {fetchUser,fetchGitRepos} from './actions';
import { connect } from 'react-redux';
import './App.css';
import User from './containers/User';
import Repos from './containers/Repos';

class App extends Component {
  componentWillMount() {
    this.props.fetchUser("caiyiliang");
    this.props.fetchGitRepos("caiyiliang");
  }

  render() {
    return (
      <div className="App">
        <User></User>
        <Repos></Repos>
      </div>
    );
  }
}

export default App = connect(null, {fetchUser,fetchGitRepos})(App);