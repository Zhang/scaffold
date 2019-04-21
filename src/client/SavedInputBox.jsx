import React, { Component } from 'react';
import Draggable from 'react-draggable';

const SavedInputBox = ({ top, left }) => (
  // This is one of the libraries I checked out when building the initial product
  // In the end, I manually implemented the feature, as it was actually easier that way
  <Draggable>
    {/* defines position as inline styles. I likely should have make this a stateful
     component as to save it later, we will need to preserve the value of top and left */}
    <div className='.saved_input_box' style={{ top, left }}>
      <p>Saved input box</p>
      <p>ID of {props.id}</p>
      <a
        // function I didn't have time to implement
        // onClick={() => {
        //   props.removeInputBox(this, props.id);
        // }}
        className='interactiveInputBox__save-btn'
      >
        delete
      </a>
    </div>
  </Draggable>
);

export default SavedInputBox;
