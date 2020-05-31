import React, { Component } from 'react'

class  CreateProject extends Component{
    state = { 
        title : '',
        content : ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    render(){
        return (
            <div className="container myform">
                <form onSubmit={this.handleSubmit} >
                <h5 className="purple-text text-darken-4">Create Project</h5>
                    <div className="input-field inputType">
                        <input id="title" type="text" onChange={this.handleChange}/>
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="input-field text-red text-darken-5">
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        <label htmlFor="content">Enter the Details of project</label>
                  </div>
                    <div className="input-field center">
                        <button className="btn waves-effect  waves-light">CREATE
                            <i className="material-icons right">done</i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProject;
