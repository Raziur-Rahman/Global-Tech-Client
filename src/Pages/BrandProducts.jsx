import { Link, useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";


const BrandProducts = () => {

    const param = useParams();
    console.log(param)

    const data = useLoaderData();

    return (
        <>
            {
                data.length > 0 ? <div>
                <div className="my-5">
                    <div className="carousel w-full">
                        <div id="item1" className="carousel-item w-full">
                            <img src={`https://i.ibb.co/1vdzSXJ/Advertise-1.jpg`} className="w-full" />
                        </div>
                        <div id="item2" className="carousel-item w-full">
                            <img src={`https://i.ibb.co/wh1ttyS/Advertise-3.jpg`} className="w-full" />
                        </div>
                        <div id="item3" className="carousel-item w-full">
                            <img src={'https://i.ibb.co/343JsmP/Advertise-2.jpg'} className="w-full" />
                        </div>
                        <div id="item4" className="carousel-item w-full">
                            <img src={'https://i.ibb.co/jv0b0gz/Advertise-4.webp'} className="w-full" />
                        </div>
                    </div>
                    <div className="flex justify-center w-full py-2 gap-2">
                        <a href="#item1" className="btn btn-xs">1</a>
                        <a href="#item2" className="btn btn-xs">2</a>
                        <a href="#item3" className="btn btn-xs">3</a>
                        <a href="#item4" className="btn btn-xs">4</a>
                    </div>
                </div>
                <h1 className="text-4xl text-amber-600 text-center font-bold py-5">Products Of: <span className='text-black'>{param.brand}</span> </h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 px-5 md:px-10 gap-5 '>
                    {
                        data.map(item => <ProductCard product={item} key={item._id}></ProductCard>)
                    }
                </div>
            </div> : <div className="h-[80vh] flex flex-col justify-center items-center">
                <h1 className="text-4xl text-amber-600">Opps!!! No data Found From the brand {param.brand}</h1>
                <Link to='/'><button className="btn btn-neutral my-5">Back to home</button></Link>
            </div>
            }
        
        
        </>
    );
};

export default BrandProducts;