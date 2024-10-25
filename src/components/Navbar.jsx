import { NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='nav-center'>
      <NavLink to='/'>
        <span className='logo'>CodeKazuki</span>
      </NavLink>

      <div className='nav-links'>
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
        <NavLink to='resume' className='nav-link btn'>
          <span>Resume</span>
          <span>
            <FaDownload />
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
