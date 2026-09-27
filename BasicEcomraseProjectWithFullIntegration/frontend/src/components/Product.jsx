import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const Product = () => {
    const { id } = useParams();

    const [product, setProduct] = useState(null);

    const getProduct = async () => {
        try {
            const res = await axios.get(
                `http://localhost:5173/api/products/${id}`
            );

            setProduct(res.data.data.product);
        } catch (error) {
            console.log("PRODUCT ERROR:", error);
        }
    };

    useEffect(() => {
        getProduct();
    }, [id]);

    if (!product) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <h1 className="text-xl font-semibold">
                    Loading...
                </h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 gap-8 rounded-2xl bg-white p-5 shadow-sm md:grid-cols-2 md:p-8">

                    {/* Product Image */}
                    <div className="flex items-center justify-center rounded-xl bg-gray-100 p-5">
                        <img
                            src={product.images?.[0]}
                            alt={product.title}
                            className="h-[400px] w-full rounded-xl object-cover sm:h-[500px]"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col justify-center">

                        {/* Title */}
                        <h1 className="text-2xl font-bold capitalize text-gray-900 sm:text-3xl">
                            {product.title}
                        </h1>

                        {/* Product ID */}
                        <p className="mt-2 text-sm text-gray-400">
                            Product ID: {product._id}
                        </p>

                        {/* Price */}
                        <div className="mt-6">
                            <span className="text-3xl font-bold text-gray-900">
                                ₹{product.price?.amount}
                            </span>

                            <span className="ml-2 text-sm text-gray-500">
                                {product.price?.currency}
                            </span>
                        </div>

                        {/* Description */}
                        <div className="mt-6">
                            <h2 className="text-lg font-semibold text-gray-900">
                                Description
                            </h2>

                            <p className="mt-2 text-sm leading-7 text-gray-600">
                                {product.description}
                            </p>
                        </div>

                        {/* Size */}
                        <div className="mt-6">
                            <h2 className="mb-3 text-lg font-semibold text-gray-900">
                                Select Size
                            </h2>

                            <div className="flex items-center gap-3">
                                {product.sizes?.map((item) => (
                                    <button
                                        key={item._id || item.size}
                                        className="rounded-lg border-2 border-gray-900 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white"
                                    >
                                        {item.size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Stock */}
                        <div className="mt-5">
                            <p className="text-sm font-medium text-green-600">
                                {product.sizes?.[0]?.stock || 0} items in stock
                            </p>
                        </div>

                        {/* Add to Cart */}
                        <button
                            className="mt-7 w-full rounded-xl bg-black px-6 py-4 text-base font-semibold text-white transition hover:bg-gray-800"
                        >
                            Add to Cart
                        </button>

                        {/* Buy Now */}
                        <button
                            className="mt-3 w-full rounded-xl border-2 border-black px-6 py-4 text-base font-semibold text-black transition hover:bg-gray-100"
                        >
                            Buy Now
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;