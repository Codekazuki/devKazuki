import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='nav-center'>
      <NavLink to='/'>
        <span className='logo'>MixMaster</span>
      </NavLink>

      <div className='nav-links'>
        <NavLink to='/' className='nav-link'>
          Home
        </NavLink>
        <NavLink to='about' className='nav-link'>
          About
        </NavLink>
        <NavLink to='newsletter' className='nav-link'>
          Newsletter
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
