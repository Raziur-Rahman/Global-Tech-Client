import { useContext } from "react";
import { Link, NavLink, useNavigate} from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Navber = () => {
    const { user, userLogOut, userLogInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        userLogOut()
            .then(() => {
                toast("User Logged Out Successful...")
                navigate("/");
            })
            .catch((error) => {
                console.error(error)
                toast(`${error}`)
            })
    }
    const handleGoogleLogin =() =>{
        userLogInWithGoogle()
        .then(result =>{
            console.log(result.user);
            toast("Login SuccessFull!!!")
            navigate("/")
        })
        .catch(error => {
            console.error(error);
            toast(`${error}`)
        })
    }

    const NavLinks = <>
        <li className="font-semibold"> <NavLink to='/'>Home</NavLink> </li>
        <li className="font-semibold"> <NavLink to='/register'>Register</NavLink> </li>
        <li className="font-semibold"> <NavLink to='/addproducts'>Add Product</NavLink> </li>
        <li className="font-semibold"> <NavLink to='/cart'>My Cart</NavLink> </li>
        <li className="font-semibold"> <NavLink to='/updateproducts'>Update</NavLink> </li>
    </>

    return (
        <nav className="shadow-xl">
            <div className="navbar flex flex-col md:flex-row space-y-3 lg:px-10 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <Link to="/"> <button className="btn btn-ghost normal-case text-xl">Quantum Technologies</button> </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbe-center md:navbar-end">
                    {
                        user ? <>
                            <span className="font-semibold text-xl">{user?.displayName}</span>
                            <span><img className="w-[50px] mx-4 rounded-full" src={user?.photoURL} alt="picture" /></span>
                            <a onClick={handleLogOut} className="btn">Sign Out</a>
                        </> : <>
                        <button onClick={handleGoogleLogin} className="btn btn-outline mr-2">Login with google</button>
                        <Link to="/login"> <button className="btn ">Log In</button> </Link>

                        </>
                    }

                </div>
            </div>
            <ToastContainer></ToastContainer>
        </nav>
    );
};

export default Navber;