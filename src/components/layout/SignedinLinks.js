import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedinLinks = () => {
    return (
        <ul className="right">
        <li> <NavLink to='/create'>Create Project</NavLink> </li>
        <li> <NavLink to='/'>Logout</NavLink> </li>
        <li> <NavLink to='/' className="btn btn-floating blue lighten-1">SF</NavLink></li>
        </ul>
    )
}

export default SignedinLinks;