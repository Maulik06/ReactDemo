import React, { Component } from 'react';
import uudi from 'uuid';

class AddProject extends Component {

    constructor()
    {
      super();
      this.state = {
        newProject: {}
      }
    }

    static defaultProps = {
        categories: ['Web Design','Web Dev','Mobile Dev']
    }

    handleSubmit(e)
    {
        if(this.refs.title.value === '')
        {
            alert("Title Required");
        }
        else{
            this.setState({
                newProject:{
                    id: uudi.v4(),
                    title: this.refs.title.value,
                    category: this.refs.category.value
                }
            },function(){
                this.props.addProject(this.state.newProject);
            });
        }
        e.preventDefault();
    }

  render() {
      let categoryOption = this.props.categories.map(
          category => {
              return <option key={category} value={category}>{category}</option>
          }
      )
    return (
      <div>
          <h3> Add Project: </h3>
             <form onSubmit={this.handleSubmit.bind(this)}>
                 <div> 
                     <label> Title </label>
                     <input type="text" ref="title" />
                 </div>
                 <div> 
                     <label> Category </label>
                     <select ref="category">
                        {categoryOption}
                     </select>
                 </div>
                 <input type="submit" value="Submit" />
            </form>
      </div>
    );
  }
}

export default AddProject;
