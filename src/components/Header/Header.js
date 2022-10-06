import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Bars3Icon, XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        {id:1, name:'Home', path:'/home'},
        {id:1, name:'Products', path:'/products'},
        {id:1, name:'About', path:'/about'},
        {id:1, name:'Cart', path:'/cart'},
        {id:1, name:'Signup/Login', path:'/contact'},
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
            <div className={`text-center bg-gray-300 h-36 md:h-auto w-full md:w-auto md:flex list-none gap-5 text-lg font-semibold absolute md:static duration-500 ease-in ${open ? 'top-16' : 'top-[-130px]'}`}>
                {
                    routes.map(route => <Navbar key={route.id} route={route}></Navbar>)
                }
            </div>
        </div>
    );
};

export default Header;