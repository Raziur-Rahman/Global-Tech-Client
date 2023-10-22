import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const Cart = () => {

    const loadedData = useLoaderData();
    const [cartData, setCartData] = useState(loadedData);

    console.log(loadedData);

    // const { ProductType, ProductName, BrandName, Price, _id } = load;

    const handleDelete = id => {
        console.log(id);
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    fetch(`https://brand-shop-server-4p3yk6n9b-raziurrahmans-projects.vercel.app/cart/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data?.deletedCount > 0) {
                                swal("Poof! Product has been deleted!", {
                                    icon: "success",
                                });
                                const remaining = cartData.filter(item => item._id !== id);
                                setCartData(remaining);
                            }
                        })
                } else {
                    swal("Product Is Safe!!");
                }
            });
    }

    return (
        <div className="px-10">
            {
                cartData.length > 0 ? <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-base-300 font-semibold">
                            <tr>
                                <th>No</th>
                                <th>Product Name</th>
                                <th>Type</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartData.map((data, index) => <tr key={data._id} className="hover:bg-base-300">
                                    <th>{index + 1}</th>
                                    <td>{data.ProductName}</td>
                                    <td>{data.ProductType}</td>
                                    <td>{data.BrandName}</td>
                                    <td>${data.Price}</td>
                                    <td><button className="btn btn-outline">edit</button> <button className="btn btn-outline" onClick={() => handleDelete(data._id)}>X</button></td>
                                </tr>)

                            }
                        </tbody>
                    </table>
                </div> : <div className="h-[80vh] flex flex-col justify-center items-center text-center">
                    <h1 className="text-4xl text-amber-600">Opps!!! No data Found. <br /> You did not add any Product to the cart yet.</h1>
                    <Link to='/'><button className="btn btn-neutral my-5">Back to home</button></Link>
                </div>
            }
        </div>
    );
};

export default Cart;