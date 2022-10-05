import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Details from "../components/Details/Details";
import Home from "../components/Home/Home";
import Products from "../components/Products/Products";
import Main from "../layout/Main";

export const router= createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[
        {path:'/', element:<Home></Home>},
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
        {path:'/contact', element:<Contact></Contact>},
    ]}
])