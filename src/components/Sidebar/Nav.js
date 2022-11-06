import React from 'react';
//import Scrollspy from 'react-scrollspy';
//import Scroll from '../Scroll';
import { Link } from 'gatsby'
import NavLink from 'react-bootstrap/NavLink'

import './sidebar.css'

import {
  FaHome,
  FaUser,
  FaPhotoVideo,
  FaEnvelope,
  FaBookOpen
} from 'react-icons/fa'


//export default function Nav({ sections = [] }) {
//  return (
const Nav = () => (
  <nav id="nav">
      <ul>
        <li>
        <NavLink as={Link} to="/" rel="preload" className="NavItems">
        <FaHome className="mr-5"/>
          Home
        </NavLink>
        </li>

        <li>
        <NavLink href="https://salemaziel.oldschoolyouth.com" rel="preload self follow" target="_blank" className="NavItems">
        <FaBookOpen className="mr-5" />
          My Blog
        </NavLink>
        </li>



        <li>
        <NavLink as={Link} to="/about" rel="preload" className="NavItems">
        <FaUser className="mr-5"/>
          About Me
        </NavLink>
        </li>



        <li>
        <NavLink as={Link} to="/portfolio" rel="preload" className="NavItems">
          <FaPhotoVideo className="mr-5"/>
          Portfolio
        </NavLink>
        </li>
        <li>
        <NavLink as={Link} to="/contact" rel="preload" className="NavItems">
        <FaEnvelope className="mr-5"/>
          Contact
        </NavLink>
        </li>

        {/*<Scrollspy
          items={sections.map(s => s.id)}
          currentClassName="active"
          offset={-300}
        >
          {sections.map(s => {
            return (
              <li key={s.id}>
                <Scroll type="id" element={s.id}>
                  <a href={`#${s.id}`} id="top-link">
                    <span className={`icon ${s.icon}`}>{s.name}</span>
                  </a>
                </Scroll>
              </li>
            );
          })}
        </Scrollspy>*/}
      </ul>
    </nav>
  );

  export default Nav
