import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = use(AuthContext)

    const handleLogout = () => {
        // console.log('clicked');
        logOut().then(() => {
            alert('Successfully logged out!')
        })
            .catch((error) => {
                console.log(error.message);
            })

    }

    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about '>About</NavLink>
        <NavLink to='/career'>Career</NavLink>
    </>
    return (
        <div className='flex justify-between items-center'>
            <div>{user && user.email}</div>
            <div className='text-accent flex gap-3'>{links}</div>
            <div className='flex gap-3'>
                <img className='w-10 rounded-full' src={`${user ? user.photoURL : userIcon}`} alt="" />
                {
                    user ? <button onClick={handleLogout} className='btn btn-primary px-8'>Log Out</button>
                        : <Link to='/auth/login' className='btn btn-primary px-8'>Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;