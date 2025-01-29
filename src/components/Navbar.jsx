import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaRegFileAlt, FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible((prev) => !prev);
  };
  return (
    <div className='nav-center'>
      <div>
        <NavLink to='/'>
          <span className='logo'>CodeKazuki</span>
        </NavLink>
      </div>

      <div className={`nav-links ${isNavVisible ? "responsive-nav" : ""}`}>
        <button
          className='nav-btn nav-close'
          onClick={toggleNav}
          aria-label='Close navigation'
        >
          <FaTimes />
        </button>
        <NavLink to='/' className='nav-link'>
          Home
        </NavLink>
        <NavLink to='about' className='nav-link'>
          About
        </NavLink>
        <NavLink to='experience' className='nav-link'>
          Experience
        </NavLink>
        <NavLink to='contactme' className='nav-link'>
          Contact Me
        </NavLink>
        <NavLink to='resume' className='nav-link btn res'>
          <span style={{ padding: " 0 auto", fontSize: "1.2rem" }}>
            <FaRegFileAlt />
          </span>
          <span>Resume</span>
        </NavLink>
        <ThemeToggle />
      </div>
      {!isNavVisible && (
        <button
          className='nav-btn nav-open'
          onClick={toggleNav}
          aria-label='Open navigation'
        >
          <FaBars />
        </button>
      )}
    </div>
  );
};

export default Navbar;
