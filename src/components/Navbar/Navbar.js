import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({route}) => {
    const {name, path} = route;
    return (
        <li>
            <NavLink className={({isActive}) => isActive ? 'bg-teal-600 text-white py-1 px-2 rounded' : undefined} to={path}>{name}</NavLink>
        </li>
    );
};

export default Navbar;