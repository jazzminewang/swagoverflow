import React, { Component } from 'react';
import BrowseButton from 'react-toolbox/lib/button/BrowseButton';
import fire from './fire';
import './companyUpload.css';

class companyUpload extends Component {
  constructor() {
    super();
    this.state = {
      filePath: '',
      imageUrl: [],
    };
  }
  componentWillMount() {
    /* Create reference to messages in Firebase Database */
    let imageUrlRef = fire
      .storage()
      .ref('messages')
      .orderByKey()
      .limitToLast(100);

    const imageUrlArray = firebase.storage();
    const imageRef = fire.storage().object();
    imageRef.on('child_added', snapshot => {
      console.log('new child added')
    })
  }

  addMessage(e) {
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire
      .database()
      .ref('messages')
      .push(this.inputEl.value);
    this.inputEl.value = ''; // <- clear the input
  }

  updateUrl = e => {
    console.log(e.target.files[0]);
    const file = e.target.value;
    this.setState({
      file,
    });
  };

  submitUrl = e => {};

  render() {
    return (
      <div className="upload">
        <BrowseButton onChange={this.updateUrl} />
      </div>
    );
  }
}

export default companyUpload;
