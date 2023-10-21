// import React from 'react';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {

    const [Data, setData] = useState([]);


    useEffect(() => {
        fetch(`https://brand-shop-server-88eektvuc-raziurrahmans-projects.vercel.app/products`)
            .then(res => res.json())
            .then(data => {
                if (data.length > 6) {
                    const remaining = data.slice(0, 6);
                    setData(remaining)
                }
            })
    }, [])

    return (
        <div>
            <h1 className="text-4xl text-center font-semibold mb-5 text-amber-600 ">Our Featured Products</h1>
            <div className="px-5 lg:px-32 mb-10">
                <div className="carousel carousel-center max-w-sm md:max-w-full p-4 space-x-4 bg-neutral rounded-box">
                    <div className="carousel-item gap-5">
                        {
                            Data.map(item => <div key={item._id} className="card bg-base-100 shadow-xl image-full min-h-md max-w-sm">
                                <figure><img src={item.Image} alt="Shoes" /></figure>
                                <div className="card-body opacity-100">
                                    <h2 className="card-title">{item.ProductName}</h2>
                                    <p>{item.ShortDescription}</p>
                                    <div className="card-actions justify-end">
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

export default FeaturedProducts;