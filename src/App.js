import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';
import Form from './Form.js';
import Confirmation from './Confirmation.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="app-chrome">
            <div className="logo-header">
              <h1 className="app-logo">hellopostal</h1>
            </div>
            <Route exact path="/" component={Form} />
            <Route exact path="/confirmation" component={Confirmation} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
