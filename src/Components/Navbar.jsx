import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about '>About</NavLink>
        <NavLink to='/career'>Career</NavLink>
    </>
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className='text-accent flex gap-3'>{links}</div>
            <div className='flex gap-3'>
                <img src={user} alt="" />
                <button className='btn btn-primary px-8'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;