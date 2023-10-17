import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layouts/Root";
import LogIn from "../Pages/LogIn";
import Registration from "../Pages/Registration";
import BrandProducts from "../Pages/BrandProducts";
import Cart from "../Pages/Cart";
import AddProduct from "../Components/AddProducts/AddProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path: "/register",
                element:<Registration></Registration>
            },
            {
                path:'/products',
                element:<BrandProducts></BrandProducts>
            },
            {
                path:'/cart',
                element:<Cart></Cart>
            },
            {
                path:'/addproducts',
                element:<AddProduct></AddProduct>
            }
        ],
    },
]);

export default router;