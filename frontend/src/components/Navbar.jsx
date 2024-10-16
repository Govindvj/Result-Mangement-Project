import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            {/*Hamburger icon */}
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
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Homepage</a></li>
                            <li><a>About</a></li>
                            <li><a>Contact</a></li>
                            <li><a>Services</a></li>
                        </ul>
                    </div>
                </div>
                <div className='navbar-center'>
                    {/* Result management logo */}
                    <a className="btn btn-ghost text-xl text-slate-100 hover:text-sky-400">
                        <img src="https://icons.veryicon.com/png/o/education-technology/online-education-background-management/student-management-4.png"
                            alt="" className="h-8 w-8 text-white" />
                        Result Management System
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <button className="btn btn-ghost btn-circle">
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
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <a className="btn btn-primary"> <span>Sign up</span>/<span>Sign in</span> </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar