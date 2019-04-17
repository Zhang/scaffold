import React, { Component } from 'react';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time

export default class InteractiveInputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      positionX: '',
      positionY: '',
    };
    this.textChange = this.textChange.bind(this);
  }

  textChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // Didn't have time to implement functionality that would update the positioning on movement

  render() {
    return (
      <Draggable>
        <div className='interactiveInputBox'>
          <form>
            <input
              className='interactiveInputBox__id-box'
              placeholder='give box ID'
              name='id'
              onChange={this.textChange}
              value={this.state.id}
              type='text'
            />
            <a
              onClick={() => {
                this.props.saveInputBox(this.state.id, this.state.positionX, this.state.positionY);
              }}
              className='interactiveInputBox__save-btn'
            >
              save
            </a>
          </form>
        </div>
      </Draggable>
    );
  }
}
