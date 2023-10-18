import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LogIn = () => {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const { userLogIn, userLogInWithGoogle } = useContext(AuthContext);


    const handleLogIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const isChecked = form.checkbox.checked;

        if (!isChecked) {
            toast("You have to accept our terms and conditions")
            return;
        }

        console.log(email , password);

        userLogIn( email, password)
        .then(result =>{
            toast("Login Successful!!")
            console.log(result.user);
            navigate("/")
        })
        .catch(error => {
            toast(`${error}`)
            console.error(error);
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

    return (
        <div>
            <div className="hero min-h-[90vh] bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left lg:ml-5 min-w-fit space-y-3 p-4">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="text-xl font-bold">{`Don't Have an Account!!`}</p>
                        <button onClick={handleGoogleLogin} className="btn btn-outline">LogIn with Google</button>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={show ? "text" : "password"} placeholder="password" name="password" className="input input-bordered w-full" required />
                                    <span className="absolute top-4 right-3" onClick={() => setShow(!show)}>
                                        {
                                            show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <input type="checkbox" name="checkbox" id="" />
                                <span className="ml-2">Please accept our <a href="" className="text-blue-700 link-hover ">terms and condition</a> </span>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="text-center">
                                <p>New Here? <Link className="text-blue-600 link-hover" to="/register">Please Register </Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LogIn;