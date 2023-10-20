import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Banner = () => {

    const {user} = useContext(AuthContext);

    return (
        <div className="hero min-h-[80vh] my-5" style={{ backgroundImage: 'url(https://i.ibb.co/LrNsqxN/tech-banner-1.jpg)', backgroundSize:"cover" }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" px-7 lg:px-24">
                    <h1 className="mb-5 text-5xl text-white font-bold">{
                        user ? <span>Hello {user?.displayName}</span> 
                        : <span>Hello Sir!!</span>
                    }</h1>
                    <p className="mb-5 text-xl text-white">{`Welcome to Quantum Technologies! Step into a world of innovation, where technology meets imagination. Explore our curated selection of state-of-the-art products designed to revolutionize your digital experience. We're thrilled to have you on board!`}</p>
                    <button className="btn btn-primary mr-5">Our Services</button>
                    <button className="btn btn-primary">Store Locator</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;