import React, { Component } from 'react';
import ToDosItem from './ToDosItem'
import PropTypes from 'prop-types';

class ToDos extends Component {
  render() {


    let todoItems;
    if(this.props.todos)
    {
        todoItems = this.props.todos.map(
      todo => {
        return(
          <ToDosItem  key={todo.title} todo={todo} />
        ); 
        }
    );
  }

    return (
      <div className="ToDos">
        <h3> ToDo List: </h3>
       {todoItems}
      </div>
    );
  }
}

export default ToDos;
