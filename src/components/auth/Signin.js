import React, { Component } from 'react'

class  Signin extends Component{
    state = { 
        email : '',
        password : ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="purple-text text-darken-4">Sign In</h5>
                    <div className="input-field">
                        <i className="material-icons prefix">email</i>
                        <input id="icon_prefix" name="email" type="email" onChange={this.handleChange}/>
                        <label htmlFor="icon_prefix">Email</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">create</i>
                        <input id="icon_prefix password" name="password" type="password" onChange={this.handleChange}/>
                        <label htmlFor="icon_prefix">Password</label>
                    </div>
                    <div className="input-field center">
                        <button className="btn waves-effect  waves-light">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin;
