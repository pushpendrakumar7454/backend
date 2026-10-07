import React, { useState } from "react";
import {
  FiHeart,
  FiShoppingBag,
  FiStar,
  FiArrowUpRight,
  FiCheck,
} from "react-icons/fi";

const ProductCard = () => {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  const product = {
    brand: "APPLE",
    title: "iPhone 16 Pro",
    description:
      "Premium titanium design with powerful performance and an advanced camera system.",
    price: "₹1,19,999",
    oldPrice: "₹1,29,999",
    discount: "8% OFF",
    rating: "4.9",
    reviews: "342 Reviews",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=90",
  };

  const handleCart = () => {
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <div className="group w-full max-w-[340px] overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">

      {/* ================= IMAGE SECTION ================= */}

      <div className="relative h-[300px] overflow-hidden bg-[#f4f6f8]">

        {/* Soft background glow */}
        <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/10 blur-3xl transition-all duration-500 group-hover:bg-orange-400/20" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#111827 1px, transparent 1px), linear-gradient(90deg, #111827 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Sale Badge */}
        <div className="absolute left-4 top-4 z-20">
          <span className="rounded-full bg-orange-500 px-3 py-1.5 text-[10px] font-bold tracking-wide text-white shadow-lg shadow-orange-500/20">
            8% OFF
          </span>
        </div>

        {/* Wishlist */}
        <button
          onClick={() => setLiked(!liked)}
          className={`absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 ${
            liked
              ? "border-orange-200 bg-orange-500 text-white"
              : "border-white bg-white/80 text-slate-700 hover:border-orange-200 hover:text-orange-500"
          }`}
        >
          <FiHeart
            size={18}
            className={liked ? "fill-white" : ""}
          />
        </button>

        {/* Product Image */}
        <div className="absolute inset-0 flex items-center justify-center">

          <img
            src={product.image}
            alt={product.title}
            className="
              h-[220px]
              w-[270px]
              object-contain
              drop-shadow-[0_25px_25px_rgba(0,0,0,0.18)]
              transition-all
              duration-700
              ease-out
              group-hover:scale-110
              group-hover:-rotate-2
            "
          />

        </div>

        {/* Bottom floating tag */}
        <div className="absolute bottom-4 left-4 rounded-full border border-white/70 bg-white/80 px-3 py-1.5 backdrop-blur-md">
          <p className="text-[9px] font-bold tracking-[0.15em] text-slate-500">
            PREMIUM
          </p>
        </div>

        {/* Quick View */}
        <button
          className="
            absolute
            bottom-4
            right-4
            flex
            h-9
            items-center
            gap-1.5
            rounded-full
            bg-[#101827]
            px-3
            text-[10px]
            font-semibold
            text-white
            opacity-0
            shadow-lg
            transition-all
            duration-300
            group-hover:opacity-100
          "
        >
          View
          <FiArrowUpRight size={13} />
        </button>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="p-5">

        {/* Brand */}
        <p className="text-[10px] font-bold tracking-[0.22em] text-orange-500">
          {product.brand}
        </p>

        {/* Title */}
        <div className="mt-1 flex items-start justify-between gap-3">

          <h2 className="line-clamp-1 text-lg font-bold text-slate-900">
            {product.title}
          </h2>

          <div className="flex shrink-0 items-center gap-1 rounded-md bg-orange-50 px-2 py-1">
            <FiStar
              size={12}
              className="fill-orange-500 text-orange-500"
            />

            <span className="text-[10px] font-bold text-orange-600">
              {product.rating}
            </span>
          </div>

        </div>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">

          <div className="flex items-center gap-0.5">
            <FiStar
              size={12}
              className="fill-orange-400 text-orange-400"
            />

            <FiStar
              size={12}
              className="fill-orange-400 text-orange-400"
            />

            <FiStar
              size={12}
              className="fill-orange-400 text-orange-400"
            />

            <FiStar
              size={12}
              className="fill-orange-400 text-orange-400"
            />

            <FiStar
              size={12}
              className="fill-orange-400 text-orange-400"
            />
          </div>

          <span className="text-[10px] text-slate-400">
            {product.reviews}
          </span>

        </div>

        {/* Divider */}
        <div className="my-4 h-px bg-slate-100" />

        {/* Price */}
        <div className="flex items-end justify-between">

          <div>

            <div className="flex items-center gap-2">

              <span className="text-xl font-black text-slate-900">
                {product.price}
              </span>

              <span className="text-xs text-slate-400 line-through">
                {product.oldPrice}
              </span>

            </div>

            <p className="mt-1 text-[9px] font-medium text-green-600">
              Inclusive of all taxes
            </p>

          </div>

          {/* Discount */}
          <div className="rounded-lg bg-green-50 px-2 py-1">
            <span className="text-[9px] font-bold text-green-600">
              SAVE MORE
            </span>
          </div>

        </div>

        {/* Add To Cart */}
        <button
          onClick={handleCart}
          className={`
            mt-4
            flex
            h-12
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            text-sm
            font-bold
            transition-all
            duration-300

            ${
              added
                ? "bg-green-500 text-white"
                : "bg-[#101827] text-white hover:bg-orange-500"
            }
          `}
        >

          {added ? (
            <>
              <FiCheck size={17} />
              Added to Cart
            </>
          ) : (
            <>
              <FiShoppingBag size={17} />
              Add to Cart
            </>
          )}

        </button>

      </div>
    </div>
  );
};

export default ProductCard;