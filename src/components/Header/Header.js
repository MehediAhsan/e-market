import React, { useContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Bars3Icon, XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const {user} = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const routes = [
        {id:1, name:'Home', path:'/home'},
        {id:2, name:'Products', path:'/products'},
        {id:3, name:'About', path:'/about'},
        {id:4, name:'Login', path:'/login'},
        {id:5, name:'Signup', path:'/signup'},
    ]
    return (
        <div className='flex justify-between bg-gray-300 md:px-20 py-5 items-center shadow-sm sticky top-0 z-50'>
            <div className='flex items-center gap-1'>
                <ShoppingBagIcon className="h-8 w-8"/>
                <h1 className='font-bold text-3xl'>E-Market</h1>
            </div>
            <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
            {
                open ? <XMarkIcon/> : <Bars3Icon/>
            }
            </div>
            <div className={`text-center bg-gray-300 h-36 md:h-auto w-full md:w-auto md:flex list-none gap-5 text-lg font-semibold absolute md:static duration-500 ease-in ${open ? 'top-16' : 'top-[-150px]'}`}>
                {
                    routes.map(route => <Navbar key={route.id} route={route}></Navbar>)
                }
                {user?.name}
            </div>
        </div>
    );
};

export default Header;