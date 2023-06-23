import React from 'react';
import "../App"
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <Link to='/'>
                <h1>Movie List</h1>
            </Link>
        </div>
        <div>
            <Link to='/favorites'>
                <h3>
                    Your Favourites
                </h3>
            </Link>
        </div>
-- Adding comment     
    </div>
  )
}

export default Navbar;
