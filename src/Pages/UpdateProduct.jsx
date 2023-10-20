import { Link, useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';

const UpdateProduct = () => {

    const data = useLoaderData();
    // console.log(data);

    const { ProductType, ProductName, BrandName, Price, Rating, Image, Description, _id } = data;
    console.log(ProductName)

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const BrandName = form.brandName.value;
        const ProductType = form.type.value;
        const Price = form.Price.value;
        const Rating = form.Rating.value;
        const Image = form.Image.value;

        const updatedProduct = { name, BrandName, ProductType, Price, Rating, Image, Description }

        // console.log(updatedProduct)

        fetch(`https://brand-shop-server-afz8opyrk-raziurrahmans-projects.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    swal("Good job!", "Coffee Updated Successfully..", "success");
                }
                else{
                    swal("Oopps!", "Something is Wrong, Update Failed...", "error");
                }
            });

    }

    return (
        <>
            <div className="w-full md:w-5/6 xl:w-2/3 bg-base-300 mx-auto px-5 lg:px-20 py-8 my-12 rounded-md space-y-5 shadow-2xl">
                <div className="px-5 md:px-16 mb-10 text-center space-y-5">
                    <h1 className="text-3xl">Update Products Details</h1>
                    <p>It is long established fact that a raeder will be distracted by the readable content of a psge when looking at its layout. <span className='font-bold text-amber-600'>Note: Please insert brand name as like as Other Products of same brand.</span></p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col lg:flex-row gap-5 ">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" placeholder="Name" defaultValue={ProductName} name='name'
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input type="text" placeholder="Brand Name" defaultValue={BrandName} name="brandName" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 ">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Type</span>
                            </label>
                            <input type="text" placeholder="Product Type" defaultValue={ProductType} name='type'
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Product Price" defaultValue={Price} name="Price" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 ">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" placeholder="Rating" defaultValue={Rating} name='Rating'
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" placeholder="Image URL" defaultValue={Image} name="Image" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <input className="btn py-2 mt-4 bg-amber-700 text-white w-full hover:bg-amber-500" type="submit" value="Update Product" />
                </form>
                <div className=' my-5 '>
                    <Link to='/'>
                        <button className='btn btn-outline '>Back to Home</button>
                    </Link>
                </div>
            </div>

        </>
    );
};


export default UpdateProduct;