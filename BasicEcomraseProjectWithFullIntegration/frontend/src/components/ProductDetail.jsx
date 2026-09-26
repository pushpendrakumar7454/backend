
import React from "react";
import { useNavigate } from "react-router";

const ProductDetail = ({ product }) => {

    const handleAddToCart = () => {
        console.log("Add to cart:", product);
    };

    const handleUpdate = () => {
        console.log("Update product:", product._id);
    };

    const handleDelete = () => {
        console.log("Delete product:", product._id);
    };

    const navigate=useNavigate()

    return (
        <div className="group w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Product Image */}
            <div
            onClick={()=>navigate("/product")}
             className="relative h-80 w-full overflow-hidden bg-gray-100">
                <img
                    src={product.images?.[0]}
                    alt={product.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Product Badge */}
                <div className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-800 shadow">
                    New
                </div>
            </div>

            {/* Product Details */}
            <div className="p-5">

                {/* Title */}
                <h1 className="truncate text-xl font-semibold capitalize text-gray-900">
                    {product.title}
                </h1>

                {/* Description */}
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
                    {product.description}
                </p>

                {/* Price */}
                <div className="mt-4 flex items-center justify-between">
                    <p className="text-2xl font-bold text-gray-900">
                        ₹{product.price.amount}
                    </p>

                    <span className="text-xs font-medium uppercase text-gray-400">
                        {product.price.currency}
                    </span>
                </div>

                {/* Add To Cart */}
               

                {/* Update & Delete */}
                <div className="mt-3 flex gap-3">

                    <button
                        type="button"
                        onClick={handleUpdate}
                        className="w-1/2 rounded-xl border border-blue-600 px-4 py-2.5 font-semibold text-blue-600 transition duration-300 hover:bg-blue-600 hover:text-white active:scale-95"
                    >
                        Update
                    </button>

                    <button
                        type="button"
                        onClick={handleDelete}
                        className="w-1/2 rounded-xl border border-red-600 px-4 py-2.5 font-semibold text-red-600 transition duration-300 hover:bg-red-600 hover:text-white active:scale-95"
                    >
                        Delete
                    </button>

                </div>

            </div>
        </div>
    );
};

export default ProductDetail;

