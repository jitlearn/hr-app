import React from 'react';
import './navbarStyels.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/images/poc_logo.png'; // Adjust path & file name if needed

const NavBar = () => {
  return (
    <nav className="top-nav">
      <Link href="/" className="nav-left">
        <Image
          src={logo}
          alt="Logo"
          width={30}
          height={30}
          className="nav-logo"
        />
        <div className="nav-title">SmartHR</div>
      </Link>

      <div className="nav-actions">
        <Link href={'/job-dashboard'} className="nav-btn">
          Job Dashboard
        </Link>
        <div className="user-avatar">V</div>
      </div>
    </nav>
  );
};

export default NavBar;
