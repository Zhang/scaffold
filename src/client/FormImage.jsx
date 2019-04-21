import React, { Component } from 'react';
import InteractiveInputBox from './InteractiveInputBox.jsx';
import SavedInputBox from './SavedInputBox.jsx';

export default class FormImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interactiveInputBoxes: [],
      savedInputBoxes: [],
      // a compromise made. Instead of setting backend routes to change IDs
      // we save them as react state and check to make sure there are no duplicates
      savedInputBoxIds: [],
    };
    this.isIdUnique = this.isIdUnique.bind(this);
    this.addEditableInputBox = this.addEditableInputBox.bind(this);
    this.saveInputBox = this.saveInputBox.bind(this);
    // this.removeSavedInputBox = this.removeSavedInputBox.bind(this);
  }

  isIdUnique(id) {
    return !this.state.savedInputBoxIds.includes(id);
  }

  // The intended workflow is that a user generates a form box
  // the user then gives this box an ID
  // this then generates a saved fake input div with the same position as the editable form box

  addEditableInputBox() {
    // This is a bit of an anti-pattern in react
    // https://web.archive.org/web/20150419023006/http://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html
    // Also, it would be a bit easier to save JSON configs of the particular input boxes
    // That way, you'd be able to reference the input configs directly for methods like isIdUnique (rather than persisting a separate array)
    const inputBox = (
      <InteractiveInputBox
        saveInputBox={this.saveInputBox}
        removeSavedInputBox={this.removeSavedInputBox}
      />
    );
    this.setState({
      interactiveInputBoxes: this.state.interactiveInputBoxes.concat([inputBox]),
    });
  }

  saveInputBox(id, positionX, positionY) {
    if (this.isIdUnique(id)) {
      console.log('added id successfully');

      // pass along the position coordinates to maintain the same position as the editable input box
      const inputBox = <SavedInputBox id={id} positionX={positionX} positionY={positionY} />;

      this.setState({
        savedInputBoxIds: this.state.savedInputBoxIds.concat([id]),
        savedInputBoxes: this.state.savedInputBoxes.concat([inputBox]),
      });
    } else {
      // Nice thinking to include this check
      // Though, perhaps it's not necessary for the user to be able to manually set the id of the configuration
      // And by defaulting it for them, using something as simple as
      // `${Math.floor(Math.random() * 10000)}` can save coding effort
      alert('ID of this input box is not unique. Please change the ID before saving');
    }
  }

  // have to compromise on this feature, can't implement it now
  // removeSavedInputBox(inputBox, id) {
  //   console.log('remove');
  // }

  render() {
    return (
      <div className='image_container'>
        <a className='header__upload-button' onClick={this.addEditableInputBox}>
          Add Input Box To Page
        </a>
        <a className='header__upload-button'>Save form</a>
        <br /> <br />
        <img src={this.props.currentImageSrc} className='image_container__img-box' />
        <div className='image_container__interactive'>
          {this.state.interactiveInputBoxes}
          {this.state.savedInputBoxes}
        </div>
      </div>
    );
  }
}
