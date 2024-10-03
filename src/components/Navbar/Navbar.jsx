import { useState, useEffect } from 'react';
import MobileMenuToggle from './MobileMenuToggle.jsx';
import { Outlet, Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  // state for mobile menu toggle button
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // useEffect to close menu on resize to desktop mode
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-menu">
          {/* logo */}
          <Link to={`/`}>
            <div className="navbar-logo">M.D.Luffy</div>
          </Link>

          {/* menu toggle button */}
          <MobileMenuToggle isOpen={isOpen} toggleMenu={toggleMenu} />

          <div
            className={`${
              isOpen ? 'block mt-4' : 'hidden'
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="navbar-links-container">
              {/* Daftar tautan navigasi */}
              {[
                '/',
                '/about',
                '/experience',
                '/education',
                '/skills',
                '/interests',
                '/awards',
              ].map((path, index) => (
                <li key={index}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `navbar-links ${isActive ? 'navbar-link-active' : ''}`
                    }
                  >
                    {path === '/'
                      ? 'Home'
                      : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
