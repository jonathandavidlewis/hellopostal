import React, { Component } from 'react';
import Form from './Form.js';


class AppChrome extends Component {
  render() {
    return (
      <div className="app-chrome">
        <div className="logo-header">
          <h1 className="app-logo">hellopostal</h1>
        </div>
        <Form />
      </div>
    );
  }
}

export default AppChrome;
