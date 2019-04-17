import React, { Component } from 'react';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time

export default class InteractiveInputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      value: '',
      positionX: '',
      positionY: '',
    };
    this.textChange = this.textChange.bind(this);
    // this.saveForm = this.saveForm.bind(this);
  }

  textChange(e) {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <Draggable>
        <div className='interactiveInputBox'>
          <form>
            <input name='value' onChange={this.textChange} value={this.state.value} type='text' />
            <input
              className='interactiveInputBox__id-box'
              placeholder='give box ID'
              name='id'
              onChange={this.textChange}
              value={this.state.id}
              type='text'
            />
            <a className='ineractiveInputBox__save-btn'>save</a>
          </form>
        </div>
      </Draggable>
    );
  }
}
