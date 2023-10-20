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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("http://localhost:5000/brands")
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
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand}`)
            },
            {
                path:'/cart',
                element:<Cart></Cart>
            },
            {
                path:'/addproducts',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/updateProducts/:id',
                element:<UpdateProduct></UpdateProduct>,
                loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: '/productsDetails/:id',
                element: <ProductsDetails></ProductsDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
            }
        ],
    },
]);

export default router;