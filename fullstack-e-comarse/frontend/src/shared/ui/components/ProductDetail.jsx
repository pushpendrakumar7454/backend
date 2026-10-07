import React, { useState } from "react";
import {
  FiHeart,
  FiStar,
  FiShoppingBag,
  FiArrowLeft,
  FiMinus,
  FiPlus,
  FiShield,
  FiTruck,
  FiRefreshCw,
} from "react-icons/fi";
import { useNavigate, useLocation } from "react-router";

const ProductDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const product = location.state?.product;

  const [liked, setLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8fafc] px-4">
        <div className="text-center">

          <h1 className="text-2xl font-black text-[#101827]">
            Product Not Found
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            This product is not available right now.
          </p>

          <button
            onClick={() => navigate("/user-header")}
            className="mt-6 rounded-xl bg-[#101827] px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-500"
          >
            Back to Products
          </button>

        </div>
      </div>
    );
  }

  const handleQuantity = (type) => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    }

    if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuyNow = () => {
    console.log("Buy Product:", product);
    console.log("Quantity:", quantity);
    console.log("Size:", selectedSize);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8fafc]">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-orange-400/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-[-180px] top-[300px] h-[500px] w-[500px] rounded-full bg-orange-300/10 blur-[140px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#101827 1px, transparent 1px), linear-gradient(90deg, #101827 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

        {/* Back Button */}

        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-orange-500"
        >
          <FiArrowLeft size={17} />
          Back to Products
        </button>

        {/* ================= PRODUCT BOX ================= */}

        <div className="overflow-hidden rounded-[28px] border border-white bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)]">

          <div className="grid lg:grid-cols-2">

            {/* ================= LEFT IMAGE ================= */}

            <div className="border-b border-slate-100 bg-[#f4f6f8] p-5 sm:p-8 lg:border-b-0 lg:border-r">

              {/* Main Image */}

              <div className="relative flex h-[380px] items-center justify-center overflow-hidden rounded-[24px] bg-white sm:h-[480px]">

                {/* Glow */}

                <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/10 blur-[70px]" />

                <img
                  src={product.images?.[selectedImage]}
                  alt={product.title}
                  className="relative z-10 h-[75%] w-[80%] object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.18)] transition-all duration-500"
                />

                {/* Wishlist */}

                <button
                  onClick={() => setLiked(!liked)}
                  className={`absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border shadow-sm backdrop-blur-md transition ${
                    liked
                      ? "border-orange-200 bg-orange-500 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-orange-300 hover:text-orange-500"
                  }`}
                >
                  <FiHeart
                    size={19}
                    className={liked ? "fill-white" : ""}
                  />
                </button>

                {/* Premium */}

                <div className="absolute bottom-5 left-5 rounded-full border border-white bg-white/90 px-4 py-2 shadow-sm backdrop-blur-md">
                  <span className="text-[10px] font-bold tracking-[0.18em] text-slate-500">
                    PREMIUM PRODUCT
                  </span>
                </div>

              </div>

              {/* Thumbnails */}

              <div className="mt-4 flex gap-3 overflow-x-auto">

                {product.images?.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 bg-white transition ${
                      selectedImage === index
                        ? "border-orange-500"
                        : "border-slate-200 hover:border-orange-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title}-${index}`}
                      className="h-full w-full object-contain p-2"
                    />
                  </button>
                ))}

              </div>
            </div>

            {/* ================= RIGHT CONTENT ================= */}

            <div className="p-6 sm:p-8 lg:p-10">

              {/* Brand */}

              <p className="text-xs font-bold tracking-[0.25em] text-orange-500">
                {product.brand || "NEXORA"}
              </p>

              {/* Title */}

              <h1 className="mt-2 text-3xl font-black tracking-tight text-[#101827] sm:text-4xl">
                {product.title}
              </h1>

              {/* Rating */}

              <div className="mt-4 flex items-center gap-3">

                <div className="flex items-center gap-1 rounded-lg bg-orange-50 px-3 py-2">

                  <FiStar
                    size={15}
                    className="fill-orange-500 text-orange-500"
                  />

                  <span className="text-sm font-bold text-orange-600">
                    {product.rating || "4.8"}
                  </span>

                </div>

                <span className="text-sm text-slate-400">
                  {product.reviews || "120+ Reviews"}
                </span>

              </div>

              {/* Divider */}

              <div className="my-6 h-px bg-slate-100" />

              {/* Description */}

              <div>

                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Product Description
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {product.description ||
                    "Premium quality product designed with excellent materials and modern styling. Perfect for everyday use and a comfortable premium experience."}
                </p>

              </div>

              {/* Price */}

              <div className="mt-7 rounded-2xl bg-slate-50 p-5">

                <p className="text-xs font-medium text-slate-400">
                  SPECIAL PRICE
                </p>

                <div className="mt-1 flex items-end gap-3">

                  <span className="text-3xl font-black text-[#101827]">
                    ₹{product.price?.amount}
                  </span>

                  <span className="pb-1 text-sm font-semibold text-green-600">
                    {product.price?.currency || "INR"}
                  </span>

                </div>

                <p className="mt-1 text-xs font-medium text-green-600">
                  Inclusive of all taxes
                </p>

              </div>

              {/* ================= SIZE ================= */}

              {product.sizes?.length > 0 && (
                <div className="mt-7">

                  <div className="flex items-center justify-between">

                    <h3 className="text-sm font-bold text-slate-900">
                      Select Size
                    </h3>

                    <span className="text-xs text-slate-400">
                      Choose your size
                    </span>

                  </div>

                  <div className="mt-3 flex flex-wrap gap-3">

                    {product.sizes.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedSize(item.size)}
                        disabled={item.stock === 0}
                        className={`min-w-[55px] rounded-xl border px-4 py-2.5 text-sm font-bold transition ${
                          selectedSize === item.size
                            ? "border-orange-500 bg-orange-500 text-white"
                            : item.stock === 0
                            ? "cursor-not-allowed border-slate-100 bg-slate-50 text-slate-300"
                            : "border-slate-200 bg-white text-slate-700 hover:border-orange-400 hover:text-orange-500"
                        }`}
                      >
                        {item.size}
                      </button>
                    ))}

                  </div>

                </div>
              )}

              {/* ================= QUANTITY ================= */}

              <div className="mt-7">

                <p className="mb-3 text-sm font-bold text-slate-900">
                  Quantity
                </p>

                <div className="flex h-12 w-fit items-center overflow-hidden rounded-xl border border-slate-200 bg-white">

                  <button
                    onClick={() => handleQuantity("decrease")}
                    className="flex h-full w-12 items-center justify-center text-slate-600 transition hover:bg-slate-100"
                  >
                    <FiMinus size={16} />
                  </button>

                  <span className="flex h-full w-14 items-center justify-center border-x border-slate-200 text-sm font-bold text-[#101827]">
                    {quantity}
                  </span>

                  <button
                    onClick={() => handleQuantity("increase")}
                    className="flex h-full w-12 items-center justify-center text-slate-600 transition hover:bg-slate-100"
                  >
                    <FiPlus size={16} />
                  </button>

                </div>

              </div>

              {/* ================= ACTION BUTTONS ================= */}

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">

                <button
                  onClick={handleBuyNow}
                  className="flex h-13 items-center justify-center gap-2 rounded-xl bg-[#101827] px-5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-orange-500 hover:shadow-orange-500/20"
                >
                  <FiShoppingBag size={18} />
                  Add to Cart
                </button>

                <button
                  onClick={handleBuyNow}
                  className="flex h-13 items-center justify-center rounded-xl bg-orange-500 px-5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:bg-orange-600"
                >
                  Buy Now
                </button>

              </div>

              {/* ================= FEATURES ================= */}

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">

                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">

                  <FiTruck
                    size={19}
                    className="text-orange-500"
                  />

                  <p className="mt-2 text-xs font-bold text-slate-800">
                    Fast Delivery
                  </p>

                  <p className="mt-1 text-[10px] text-slate-400">
                    Quick doorstep delivery
                  </p>

                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">

                  <FiShield
                    size={19}
                    className="text-orange-500"
                  />

                  <p className="mt-2 text-xs font-bold text-slate-800">
                    Secure Payment
                  </p>

                  <p className="mt-1 text-[10px] text-slate-400">
                    100% secure checkout
                  </p>

                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">

                  <FiRefreshCw
                    size={19}
                    className="text-orange-500"
                  />

                  <p className="mt-2 text-xs font-bold text-slate-800">
                    Easy Returns
                  </p>

                  <p className="mt-1 text-[10px] text-slate-400">
                    Simple return policy
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetail;