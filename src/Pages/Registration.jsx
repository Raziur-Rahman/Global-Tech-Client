import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Registration = () => {

    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const {userRegitration, userLogInWithGoogle} = useContext(AuthContext);

    const handleRegistration = event => {
        event.preventDefault();

        const form = event.target;
        
        const Name =form.Name.value;
        const photo =form.Photo.value;
        const email =form.email.value;
        const password =form.password.value;
        const isChecked = form.checkbox.checked;

        if (password.length < 6) {
            toast("Password should be at least 6 digit");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast("password Should have at least one capital latter..");
            return;
        }
        else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
            toast("password Should have at least one Special character...");
            return;
        }
        else if (!isChecked) {
            toast("You have to accept our terms and conditions")
            return;
        }

        userRegitration( email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast("User created Successfuly....")

                updateProfile(user, {
                    displayName: Name,
                    photoURL: photo
                })

            })
            .catch(error => {
                console.error(error);
                toast("Registration failed...")
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
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left lg:ml-5 min-w-fit space-y-2 p-4">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="text-xl font-bold">Login with social</p>
                        <button onClick={handleGoogleLogin} className="btn btn-outline">LogIn with Google</button>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegistration} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile Photo</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name="Photo" className="input input-bordered" />
                            </div>
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
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div>
                                <p>Already Registered? <Link className="text-blue-600 link-hover" to="/login">Please Login!!!</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Registration;