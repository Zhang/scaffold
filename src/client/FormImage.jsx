import React, { Component } from 'react';
import InteractiveInputBox from './InteractiveInputBox.jsx';

export default class FormImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interactiveInputBoxes: [],
      inputBoxIds: [],
    };
    this.isIdUnique = this.isIdUnique.bind(this);
    this.addInputBox = this.addInputBox.bind(this);
    this.saveInputBox = this.saveInputBox.bind(this);
  }

  isIdUnique(id) {
    return !this.state.inputBoxIds.includes(id);
  }

  addInputBox() {
    const inputBox = <InteractiveInputBox />;
    this.setState({
      interactiveInputBoxes: this.state.interactiveInputBoxes.concat([inputBox]),
    });
  }

  saveInputBox(inputBox, id) {
    if (this.isIdUnique(id)) {
      this.setState({
        interactiveInputBoxes: this.state.interactiveInputBoxes.concat([inputBox]),
      });
    }

    alert('ID of this input box is not unique. Please change the ID before saving');
  }

  render() {
    return (
      <div className='image_container'>
        <a className='header__upload-button' onClick={this.addInputBox}>
          Add Input Box To Page
        </a>
        <a className='header__upload-button'>Save form</a>
        <br /> <br />
        <img src={this.props.currentImageSrc} className='image_container__img-box' />
        <div className='image_container__interactive'>{this.state.interactiveInputBoxes}</div>
      </div>
    );
  }
}
