// import packages:
import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Logo.svg';

function Navbar() {

    return (
        <nav>
            <div className='nav-center'>
                <Link to='/'>
                    <img className='logo' src={Logo} alt='logo' />
                </Link>
                <ul className='nav-links'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;