import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {

    console.log(product)

    const { Image, ProductName, BrandName, ProductType, Price, Rating } = product;

    return (
        <div>
            <div className="card lg:card-side bg-base-200 shadow-xl">
                <figure><img className="h-[350px] w-[300px] p-3" src={Image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{ProductName}</h2>
                    <div className="flex justify-between">
                        <button className="btn px-2 py-1">
                            Brand:
                            <div className="badge badge-secondary">{BrandName}</div>
                        </button>
                        <button className="btn">
                            Type:
                            <div className="badge badge-secondary">{ProductType}</div>
                        </button>
                    </div>
                    <div className="flex justify-between">
                        <button className="btn px-2 py-1">
                            Price
                            <div className="badge badge-secondary">{Price}</div>
                        </button>
                        <button className="btn">
                            Ratings
                            <div className="badge badge-secondary">{Rating}/5</div>
                        </button>
                    </div>
                    <div className="flex justify-around items-end align-baseline">
                        <button className="btn btn-primary">Details</button>
                        <button className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

ProductCard.propTypes ={
    product: PropTypes.object
}