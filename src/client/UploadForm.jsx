import React, { Component } from 'react';

export default class UploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleState: '',
    };
  }

  render() {
    return (
      <div className='upload_box'>
        <form method='post' enctype='multipart/form-data' action='/upload'>
          <p>Select file to upload</p>
          <input type='file' name='pic' accept='image/*' />
          <input onClick={this.props.hideForm} type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}
