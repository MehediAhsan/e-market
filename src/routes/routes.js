import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Products from "../components/Products/Products";
import Main from "../layout/Main";

export const router= createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[
        {path:'/', element:<Home></Home>},
        {path:'/home', element:<Home></Home>},
        {
            path:'/products',
            loader: async () =>{
                return fetch('https://fakestoreapi.com/products');
            }, 
            element:<Products></Products>
        },
        {path:'/about', element:<About></About>},
        {path:'/contact', element:<Contact></Contact>},
    ]}
])