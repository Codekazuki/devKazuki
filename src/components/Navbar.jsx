import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { FaRegFileAlt, FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
const Navbar = () => {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  return (
    <div className='nav-center'>
      <div>
        <NavLink to='/'>
          <span className='logo'>CodeKazuki</span>
        </NavLink>
      </div>

      <div ref={navRef} className='nav-links'>
        <NavLink to='/' className='nav-link'>
          Home
        </NavLink>
        <NavLink to='about' className='nav-link'>
          About
        </NavLink>
        <NavLink to='experience' className='nav-link'>
          Experience
        </NavLink>
        <NavLink to='contactus' className='nav-link'>
          Contact Us
        </NavLink>
        <NavLink to='resume' className='nav-link btn res'>
          <span style={{ padding: " 0 auto", fontSize: "1.2rem" }}>
            <FaRegFileAlt />
          </span>
          <span>Resume</span>
        </NavLink>
        <ThemeToggle />
        <button className='nav-btn nav-close' onClick={showNavBar}>
          <FaTimes />
        </button>
      </div>
      <button className='nav-btn nav-open' onClick={showNavBar}>
        <FaBars />
      </button>
    </div>
  );
};

export default Navbar;
