import React, { Component } from 'react';

// Imports the Google Cloud client library
import { Storage } from '@google-cloud/storage';

import './App.css';

class companyUpload extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default companyUpload;