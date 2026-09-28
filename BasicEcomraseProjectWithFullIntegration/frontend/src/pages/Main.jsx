
import React, { useEffect } from "react";
import ProductDetail from "../components/ProductDetail";
import { useAuth } from "../context/authContext";
import useApi from "../config/apiInstance";

const Main = () => {
  const { products, setProducts } = useAuth();
   const api=useApi()
  const getData = async () => {
    try {
      const res = await api.get(
        "/products/find"
      );

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

