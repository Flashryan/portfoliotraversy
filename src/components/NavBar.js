import React from 'react'
import {NavLink} from 'react-router-dom';

export default function NavBar() {
    return (
        <header className="bg-gray-800">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to='/'
                    className="inflex-flex items-center py-6 px-3 text-red-100 text-4xl font-bold cursive tracking-widest"
                    activeClassName="text-white"
                    >
                        Ryan
                    </NavLink>
                    <NavLink to='/post' className="inflex-flex items-center py-6 px-3 text-red-100 text-4xl font-bold cursive tracking-widest">
                        Blog
                    </NavLink>
                    <NavLink to='/project'>
                        Project
                    </NavLink>
                    <NavLink to='/about'>
                        About
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}