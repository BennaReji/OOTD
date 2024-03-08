import React from 'react'
import{ Link } from "react-router-dom";




function Navbar() {
    return(
        <div className='navbar'>
            <div className= 'nav-logo'>
                OOTD
            </div>
            <ul className = 'navbar-menu'>

                <li><Link to="/">Login</Link></li>
            </ul>
        </div>

    );
}
export default Navbar;