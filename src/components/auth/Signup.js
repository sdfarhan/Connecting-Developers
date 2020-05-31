import React, { Component } from 'react'

class  Signup extends Component{
    state = { 
        firstName : '',
        lastName : '',
        email : '',
        password : ''
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
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="purple-text text-darken-4">Sign Up</h5>
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="input-field">
                                <i className="material-icons prefix">person</i>
                                <input id="firstName"  type="text" onChange={this.handleChange}/>
                                <label htmlFor="firstName">First Name</label>
                            </div>
                        </div>
                        <div className="col s12 m6">
                            <div className="input-field">
                                <input id="lastName" type="text" onChange={this.handleChange}/>
                                <label forhtml="lastName">Last Name</label>
                            </div>
                        </div>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">email</i>
                        <input id="email" type="email" onChange={this.handleChange}/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">create</i>
                        <input id="password" type="password" onChange={this.handleChange}/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="input-field center">
                        <button className="btn waves-effect  waves-light">REGiSTER
                            <i className="material-icons right">edit</i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup;
