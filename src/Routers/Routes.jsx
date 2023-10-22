import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layouts/Root";
import LogIn from "../Pages/LogIn";
import Registration from "../Pages/Registration";
import BrandProducts from "../Pages/BrandProducts";
import Cart from "../Pages/Cart";
import AddProduct from "../Pages/AddProduct";
import UpdateProduct from "../Pages/UpdateProduct";
import ProductsDetails from "../Components/ProductsDetails";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Pages/ErrorPage";

// https://brand-shop-server-4p3yk6n9b-raziurrahmans-projects.vercel.app

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("https://brand-shop-server-4p3yk6n9b-raziurrahmans-projects.vercel.app/brands")
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
                path:'/products/:brand',
                element:<BrandProducts></BrandProducts>,
                loader: ({params}) => fetch(`https://brand-shop-server-4p3yk6n9b-raziurrahmans-projects.vercel.app/products/${params.brand}`)
            },
            {
                path:'/cart/:email',
                element:<PrivateRoutes><Cart></Cart></PrivateRoutes>,
                loader: ({params}) => fetch(`https://brand-shop-server-4p3yk6n9b-raziurrahmans-projects.vercel.app/cart/${params.email}`)
            },
            {
                path:'/addproducts',
                element:<PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
            },
            {
                path:'/updateProducts/:id',
                element:<PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>,
                loader: ({params})=> fetch(`https://brand-shop-server-4p3yk6n9b-raziurrahmans-projects.vercel.app/product/${params.id}`)
            },
            {
                path: '/productsDetails/:id',
                element: <PrivateRoutes><ProductsDetails></ProductsDetails></PrivateRoutes>,
                loader: ({params})=> fetch(`https://brand-shop-server-4p3yk6n9b-raziurrahmans-projects.vercel.app/product/${params.id}`)
            }
        ],
    },
]);

export default router;