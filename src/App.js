import React, { Component } from 'react';
import Projects from './components/Projects'
import AddProject from './components/AddProject'
import ToDos from './components/ToDos'
import './App.css';
import uuid from 'uuid';
import $ from 'jquery';


class App extends Component {

  constructor()
  {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }
  getToDos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      success: function(data){
        this.setState({todos:data},
        function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, error){
        console.log(error);
      }
    });

  }


  componentWillMount()
  {
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        id: uuid.v4(),
        title: 'Social App',
        category: 'Mob Dev'
      },
      {
        id: uuid.v4(),
        title: 'E-Comm Shopping Cart',
        category: 'Web Dev'
      }
    ]});
    this.getToDos();
  }


  

  componentDidMount()
  {
    this.getToDos();
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id)
  {
    let projects = this.state.projects;
    const index = projects.findIndex(x => x.id === id);
    projects.splice(index,1);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        <h1>My Demo App</h1>
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>

        <hr />
        <ToDos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
