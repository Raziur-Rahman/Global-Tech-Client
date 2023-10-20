import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const Cart = () => {

    const loadedData = useLoaderData();
    const [data, setData] = useState(loadedData);

    // const { ProductType, ProductName, BrandName, Price, _id } = load;

    const handleDelete = id =>{
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

                    fetch(`http://localhost:5000/cart/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if(data?.deletedCount > 0){
                                swal("Poof! Product has been deleted!", {
                                    icon: "success",
                                });
                                const remaining = loadedData.filter(item => item._id !== id);
                                setData(remaining);
                            }
                        })
                } else {
                    swal("Product Is Safe!!");
                }
            });
    }

    return (
        <div className="px-10">

            <div className="overflow-x-auto">
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
                            data.map((data, index)=> <tr key={data._id} className="hover:bg-base-300">
                                <th>{index+1}</th>
                                <td>{data.ProductName}</td>
                                <td>{data.ProductType}</td>
                                <td>{data.BrandName}</td>
                                <td>${data.Price}</td>
                                <td><button className="btn btn-outline">edit</button> <button className="btn btn-outline" onClick={()=> handleDelete(data._id)}>X</button></td>
                            </tr>)

                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default Cart;