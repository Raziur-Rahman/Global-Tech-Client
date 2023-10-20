import { Link } from 'react-router-dom';

const UpdateProduct = () => {


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const BrandName = form.brandName.value;
        const ProductType = form.type.value;
        const Price = form.Price.value;
        const Rating = form.Rating.value;
        const Description = form.description.value;
        const Image = form.Image.value;

        const newProduct = { name, BrandName, ProductType, Price, Rating, Description, Image }

        console.log(newProduct)

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
                            <input type="text" placeholder="Name" name='name'
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input type="text" placeholder="Brand Name" name="brandName" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 ">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Type</span>
                            </label>
                            <input type="text" placeholder="Product Type" name='type'
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Product Price" name="Price" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 ">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" placeholder="Rating" name='Rating'
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" placeholder="Image URL" name="Image" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <input className="btn py-2 mt-4 bg-amber-700 text-white w-full hover:bg-amber-500" type="submit" value="ADD Product" />
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