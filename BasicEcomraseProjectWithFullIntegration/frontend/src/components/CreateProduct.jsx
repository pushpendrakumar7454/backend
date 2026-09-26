
import axios from "axios";
import React, { useState } from "react";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 600,
    currency: "INR",
    size: "S",
    stock: 45,
  });



  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = new FormData();

    data.append("title", formData.title);
    data.append("description", formData.description);

    data.append(
      "price",
      JSON.stringify({
        amount: formData.price,
        currency: formData.currency,
      })
    );

    data.append(
      "sizes",
      JSON.stringify([
        {
          size: formData.size,
          stock: formData.stock,
        },
      ])
    );

    if (image) {
      data.append("images", image);
    }

    console.log("Sending Product Data");

    const res = await axios.post(
      "http://localhost:5173/api/products",
      data
    );

    console.log("PRODUCT RESPONSE:", res.data);
  } catch (error) {
    console.log("PRODUCT ERROR:", error.response?.data);
  }
};




  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Product
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Add a new product to your store
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-6 shadow-sm sm:p-8"
        >

          {/* Title */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Product Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter product title"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              placeholder="Enter product description"
              required
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Image */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Product Image
            </label>

            <input
              type="file"
              name="images"
              accept="image/*"
              onChange={handleImageChange}
              required
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm"
            />

            {image && (
              <div className="mt-3">
                <p className="text-sm text-gray-500">
                  Selected: {image.name}
                </p>

                <img
                  src={URL.createObjectURL(image)}
                  alt="Product Preview"
                  className="mt-3 h-40 w-40 rounded-lg object-cover"
                />
              </div>
            )}
          </div>

          {/* Price */}
          <div className="mb-6">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Price
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              {/* Amount */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Amount
                </label>

                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  min="0"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              {/* Currency */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Currency
                </label>

                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                >
                  <option value="INR">INR</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>

            </div>
          </div>

          {/* Size & Stock */}
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Size & Stock
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              {/* Size */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Size
                </label>

                <select
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                >
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>

              {/* Stock */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Stock
                </label>

                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  min="0"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-black px-6 py-3.5 font-semibold text-white transition hover:bg-gray-800 active:scale-95"
          >
            Create Product
          </button>

        </form>
      </div>
    </div>
  );
};

export default CreateProduct;

