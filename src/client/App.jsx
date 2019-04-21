import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import UploadForm from './UploadForm.jsx';
import FormImage from './FormImage.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: true,
      currentImageSrc: '/images/test-image.jpeg',
    };
    this.hideForm = this.hideForm.bind(this);
  }

  // This hide and show form code was intended to shift views
  // as the user had uploaded or selected an existing form or not
  makeFormVisible = () => {
    // Slightly differnt syntax to save some characters
    this.setState({
      formVisible: true,
    });
  }

  hideForm() {
    this.setState({
      formVisible: false,
    });
  }

  render() {
    return (
      <div>
        <section className='header'>
          <a onClick={this.makeFormVisible} className='header__upload-button'>
            Upload a form image
          </a>
        </section>
        <br /> <br />
        {this.state.formVisible ? <UploadForm hideForm={this.hideForm} /> : null}
        <br /> <br />
        <FormImage currentImageSrc={this.state.currentImageSrc} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
