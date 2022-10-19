import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Details from "../components/Details/Details";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Products from "../components/Products/Products";
import SignUp from "../components/SignUp/SignUp";
import Main from "../layout/Main";

export const router= createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[
        {
            path:'/',
            loader: async () => {
                return fetch('https://fakestoreapi.com/products/categories');
            }, 
            element:<Home></Home>
        },
        {
            path:'/home', 
            loader: async () => {
                return fetch('https://fakestoreapi.com/products/categories');
            },
            element:<Home></Home>
        },
        {
            path:'/products',
            loader: async () =>{
                return fetch('https://fakestoreapi.com/products');
            }, 
            element:<Products></Products>
        },
        {
            path:'/product/:productId',
            loader: async({params}) => {
                return fetch(`https://fakestoreapi.com/products/${params.productId}`);
            },
            element:<Details></Details>
        },
        {
            path:'/about', 
            loader: async () =>{
                return fetch('https://fakestoreapi.com/products');
            },
            element:<About></About>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: 'signup',
            element: <SignUp></SignUp>
        }
    ]},
    {path:'*', element:<div><h1 className="font-bold text-3xl text-center mt-20 text-red-500">Error 404 not found</h1></div>}
])