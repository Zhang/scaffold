import React, { PureComponent } from 'react';

export default class UploadForm extends PureComponent {
  render() {
    const { hideForm } = this.props;

    return (
      <div className='upload_box'>
        <form method='post' enctype='multipart/form-data' action='/upload'>
          <p>Select file to upload</p>
          <input type='file' name='pic' accept='image/*' />
          <input onClick={hideForm} type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}
