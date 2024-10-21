import React, { useContext } from 'react';
import logo from '../../../src/assets/logo.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthContextProvider';
import { toast } from 'react-toastify';

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogOut = () => {
    logOut()
    .then(result => {
      console.log(result.user)
      toast.warn('Log Out Successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    })
    .catch(() => {

    })
    navigate('/login')

  }

    return (
        <div className="navbar bg-base-100 h-24 fixed top-0 left-0 right-0 max-w-7xl mx-auto z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/services'>Services</NavLink></li>
              <li><NavLink to='/blog'>Blog</NavLink></li>
              <li><NavLink to='/contact'>Contact</NavLink></li>
              {
                user?.email && <div>
                  <li><NavLink to='/mybooking'>My Booking</NavLink></li>
                </div>
              }
            </ul>
          </div>
          <Link to='/' className="text-xl">
            <img className='w-20' src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/services'>Services</NavLink></li>
              <li><NavLink to='/blog'>Blog</NavLink></li>
              <li><NavLink to='/contact'>Contact</NavLink></li>
              {
                user?.email && <div>
                  <li><NavLink to='/mybooking'>My Booking</NavLink></li>
                </div>
              }
          </ul>
        </div>
        <div className="navbar-end">
        {
          user?.email ? <div className='flex gap-x-2'>

          <button onClick={handleLogOut} className="btn btn-outline btn-warning">LogOut</button>
          <button className="btn btn-outline btn-warning mr-6">Appointment</button>
          </div>
          :
          <>
            <NavLink to='/login'><button className="btn btn-outline btn-warning mr-3">LogIn</button></NavLink>
            <button className="btn btn-outline btn-warning mr-6">Appointment</button>
          </>
        }
        </div>
      </div>
    );
};

export default Navbar;