import { useLoaderData } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Banner from "../Components/Headers/Banner";


const Home = () => {

    const data = useLoaderData();



    return (
        <div>
            {/* <Banner></Banner> */}
            <h1 className="text-5xl text-amber-500 text-center"> Shop By Brands</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 px-36 py-10">
                {
                    data.map(item => <div key={item._id} className="card w-96 glass">
                    <figure><img className="h-[200px]" src={item.brand_image} alt="car!"/></figure>
                    <div className="card-body">
                      <h2 className="card-title">{item.brand_name}</h2>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
            <h1 className='text-4xl text-red-700'>Welcome to Home : {data?.length}</h1>
            {/* <button onClick= {handleClick} className="btn btn-outline">Insert data</button> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;