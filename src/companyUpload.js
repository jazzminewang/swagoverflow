import React, { Component } from 'react';
import BrowseButton from 'react-toolbox/lib/button/BrowseButton';


import './companyUpload.css';

class companyUpload extends Component {
  constructor() {
    super();
    this.state = {
      filePath: '',
    };
  }
  updateUrl = e => {
    console.log(e.target.files[0]);
    const file = e.target.value;
    this.setState({
      file,
    });
  };

  submitUrl = e => {

  }

  render() {
    return (
      <div className="upload">
        <BrowseButton onChange={this.updateUrl} />
      </div>
    );
  }
}

export default companyUpload;
