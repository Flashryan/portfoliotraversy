import React from "react";
import {useState} from 'react'
import { FaBars } from 'react-icons/fa';
import {Link} from 'react-scroll'
import Logo from '../images/logo@2x.png'


export default function Menu({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="bg-gray-800 dark:bg-gray-800 font-body text-gray-300 py-8">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div class="block">
                    <div>
                      <img src={Logo} style={{maxHeight: 100}}/>
                    </div>
                </div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-white-800 block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars text-white">
              
              </i>
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
              <a class="text-white dark:text-white  hover:text-crimson dark:hover:text-white px-3 py-2 rounded-md text-lg font-medium" href="/#">
                            <Link  to="skills" spy={true} smooth={true}>Skills</Link>
                            </a>
              </li>
              <li className="nav-item">
              <a class="text-white  hover:text-crimson dark:hover:text-white px-3 py-2 rounded-md text-lg font-medium" href="/#">
                            <Link  to="about" spy={true} smooth={true}>About</Link>
                            </a>
              </li>
              <li className="nav-item">
              <a class="text-white  hover:text-crimson dark:hover:text-white px-3 py-2 rounded-md text-lg font-medium" href="/#">
                            <Link  to="portfolio" spy={true} smooth={true}>Portfolio</Link>
                            </a>
              </li>
              <li className="nav-item">
              <a class="text-white  hover:text-crimson dark:hover:text-white px-3 py-2 rounded-md text-lg font-medium" href="/#">
                            <Link  to="contact" spy={true} smooth={true}>Contact</Link>
                            </a>
              </li>
              <li className="nav-item">
              <a class="text-crimson  hover:text-crimson dark:hover:text-white px-3 py-2 rounded-md text-2xl font-bold" href="../images/RyanDaviesCV.pdf">My CV</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}