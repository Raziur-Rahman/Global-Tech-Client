import { Link, NavLink } from "react-router-dom";


const Navber = () => {

    const NavLinks = <>
        <li className="font-semibold"> <NavLink to='/'>Homepage</NavLink>  </li>
        <li className="font-semibold"> <NavLink to='/addproducts'>Add Products</NavLink>  </li>
        <li className="font-semibold"> <NavLink to='/cart'>My Cart</NavLink>  </li>
    
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                NavLinks
                            }
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost normal-case text-xl">QuantumTechTribe</a>
                </div>
                <div className="navbar-end space-x-3">
                    <Link><button className="btn btn-outline italic">LogIn with Google </button></Link>
                    <Link><button className="btn btn-outline">Log In</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Navber;