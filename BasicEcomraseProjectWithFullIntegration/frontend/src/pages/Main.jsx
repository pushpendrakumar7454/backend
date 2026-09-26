
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductDetail from "../components/ProductDetail";
import axios from "axios";

const Main = () => {
    const [products, setProducts] = useState([]);

    const getData = async () => {
        try {
            const res = await axios.get(
                "http://localhost:5173/api/products/find"
            );

            console.log("FULL RESPONSE:", res);
            console.log("RESPONSE DATA:", res.data);
            console.log("PRODUCTS:", res.data.data.products);

            setProducts(res.data.data.products);
        } catch (error) {
            console.log("ERROR:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <Header />

            <div className="grid grid-cols-1 gap-6 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => {
                    return (
                        <ProductDetail
                            key={product._id}
                            product={product}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Main;

