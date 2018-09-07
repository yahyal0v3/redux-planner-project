import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Header from './components/Header'
import Home from './containers/Home'
import Events from './containers/Events'
import Planner from './containers/Planner'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Events}/>
          <Route exact path="/party-planner" component={Planner}/>
        </div>
      </Router>
    );
  }
}

export default App;
