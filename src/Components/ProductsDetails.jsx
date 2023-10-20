import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const ProductsDetails = () => {
    const [specs, setSpecs] = useState([]);
    const data = useLoaderData();

    const { ProductType, ProductName, BrandName, Price, Rating, Image, ShortDescription, _id } = data;

    useEffect(() => {
        const features = data?.Specification;
        if (features) {
            const feature = features.split(",")
            setSpecs(feature)
        }
    }, [data?.Specification])

    const handleAddCart = id => {
        console.log(id);
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type':"application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                swal("Good job!", "Your Product is Added to Cart", "success");
            }
        })
        
    }

    return (
        <div className="px-5 md:px-20 lg:px-40">

            <div className="flex flex-col md:flex-row justify-center my-5 md:my-8">
                <div>
                    <img className="rounded-2xl h-[500px]" src={Image} alt="" />
                </div>
                <div className="mt-16 space-y-4" >
                    <h1 className="text-2xl font-bold">Name: {ProductName}</h1>
                    <h1 className="text-2xl font-bold">Brand: {BrandName}</h1>

                    <p><span className="font-bold">Product Type:</span> {ProductType}</p>
                    <p><span className="font-bold">Price:</span> {Price}</p>
                    <p><span className="font-bold">Ratings:</span> {Rating}/5</p>

                    <button onClick={() => handleAddCart(_id)} className="btn btn-success"> Add to Cart </button>
                </div>
            </div>
            <div className="space-y-5">
                {
                    ShortDescription && <>
                        <h1 className="text-3xl text-amber-500 font-bold">Description</h1>
                        <p className="font-xl indent-8">{ShortDescription}</p>
                    </>
                }
                {
                    specs.length > 0 && <div>
                        <h1 className="text-3xl text-amber-500 font-bold">Key Features</h1>
                        <ul className="list-disc indent-6 pb-10">
                            {
                                specs.map((item, index) => <li className="list-inside" key={index}>{item}</li>)
                            }
                        </ul>
                    </div>
                }


            </div>

        </div>
    );
};

export default ProductsDetails;