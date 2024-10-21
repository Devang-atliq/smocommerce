import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import header from './header.css';


export const Navbar = () => {
  return (
      <header className=' top-0 w-full bg-white border-b-1 border-b-gray-light'>
        <div className='container'>
            <div className="navbar border-b border-gray-200">
                <div className="navbar-start">
                    <Link to='/' className="text-xl hover:cursor-pointer">
                        <img className='h-auto w-auto' src={logo} alt='logo' />
                    </Link>                               
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='./CaseStuides'>Case Studies</Link></li>
                        <li>
                            <details>
                                <summary>Service</summary> 
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>About</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link to={'./Career'}>Careers</Link></li>
                        <li><Link to={'./Resources'}>Resources</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn h-auto min-h-auto btn-head px-28 py-10">Get Free Consult</a>
                    <div className="dropdown dropdown-end">
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
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div> 
                </div>
            </div>
        </div>
    </header>
  )
}
