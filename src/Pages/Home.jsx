import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Banner from "../Components/Headers/Banner";


const Home = () => {

    const data = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <h1 className="text-5xl text-amber-500 text-center"> Shop By Brands</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-36 py-10">
                {
                    data.map(item => <Link to={`/products/${item.brand_name}`} key={item._id}>
                        <div key={item._id} className="card glass">
                            <figure><img className="h-[200px]" src={item.brand_image} alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.brand_name}</h2>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;