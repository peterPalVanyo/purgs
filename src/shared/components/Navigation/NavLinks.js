import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavLinks.css'

const NavLinks = () => {
    return <ul className='nav-links'>
        <li>
            <NavLink exact to='/'>All USERS</NavLink>
        </li>
        <li>
            <NavLink to='/u1/places'>MY INFERNOS</NavLink>
        </li>
        <li>
            <NavLink to='/places/new'>NEW HELL</NavLink>
        </li>
        <li>
            <NavLink to='/auth'>AUTHENTICATE</NavLink>
        </li>
    </ul>
}

export default NavLinks