import React, { Component } from 'react';
import _ from 'lodash';
import fire from '../fire';

const storage = fire.storage();
const database = fire.database();

class UploadImage extends Component {
  constructor() {
    super();
    this.state = {
      file: {},
      filename: '',
    };
  }

  updateUrl = e => {
    // saving image to storage
    e.preventDefault();
    const file = e.target.files[0];
    const filename = file.name;
    console.log(file);
    const storageRef = storage.ref().child('images');
    const photoRef = storageRef.child(file.name);
    const uploadTask = photoRef.put(file);
    uploadTask.on('state_changed', null, null, (snapshot) => {
      console.log("getting url")
      // save url to database
      photoRef
        .getDownloadURL()
        .then(url => {
          console.log("saving url")
          const newRef = database.ref('imageURLs').push();
          newRef.set({
            filename,
            url
          });
        });
    });
  };

  update = _.once(this.updateUrl);

  render() {
    return (
      <div className="upload">
        <input type="file" onChange={this.update} accept=".jpg, .jpeg, .png"/>
      </div>
    );
  }
}

export default UploadImage;
