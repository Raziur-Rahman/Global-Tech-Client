import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";


const BrandProducts = () => {

    const param = useParams();
    console.log(param)
    
    const data = useLoaderData();

    return (
        <div> 
            <h1 className="text-4xl text-amber-600 text-center font-bold py-5">Products Of: <span className='text-black'>{param.brand}</span> </h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 px-5 md:px-10 gap-5 '>
                {
                    data.map(item => <ProductCard product={item} key={item._id}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default BrandProducts;