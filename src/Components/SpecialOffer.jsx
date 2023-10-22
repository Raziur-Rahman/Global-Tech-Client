import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const SpecialOffer = () => {

    const [Data, setData] = useState([]);


    useEffect(() => {
        fetch(`https://brand-shop-server-4p3yk6n9b-raziurrahmans-projects.vercel.app/products`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.length > 6) {
                    const remaining = data.slice(12, -1);
                    setData(remaining)
                }
            })
    }, [])

    return (
        <div>
            <h1 className="text-4xl text-center text-amber-600 font-bold my-5">CheckOut Our Offers</h1>
            <div className="px-5 lg:px-32 mb-10">
                <div className="carousel carousel-center max-w-sm md:max-w-full p-4 space-x-4 bg-neutral rounded-box">
                    <div className="carousel-item gap-5">
                        {
                            Data.map((item, index) => <div key={item._id} className="hero min-h-[500px] bg-base-100" style={{ backgroundImage: `url(${item.Image})`}}>
                                <div className="hero-overlay bg-opacity-40"></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-md">
                                        <h1 className="mb-5 text-2xl lg:text-4xl text-white font-bold">{item.ProductName}</h1>
                                        <p className="mb-5 text-white text-xl"><span>{`${5 * (index + 1)}`}%</span> flat discount On this Product</p>
                                        <Link to={`/productsDetails/${item._id}`}><button className="btn btn-primary">Details</button></Link>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;