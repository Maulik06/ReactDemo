import React, { Component } from 'react';

class ToDosItem extends Component {

  
  render() {
    return (
      <li className="ToDosItem">
       <strong> {this.props.todo.title}</strong>
      </li>
    );
  }
}

export default ToDosItem;
