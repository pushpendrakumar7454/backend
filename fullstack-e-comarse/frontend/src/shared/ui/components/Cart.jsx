import React, { useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiHeart,
  FiMinus,
  FiPlus,
  FiTrash2,
  FiTag,
  FiShield,
  FiTruck,
  FiCreditCard,
  FiShoppingBag,
  FiCheck,
  FiLock,
} from "react-icons/fi";
import { useNavigate } from "react-router";

const Cart = () => {
  const navigate = useNavigate();

  // ==============================
  // HARD CODED CART DATA
  // ==============================

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Premium Oversized Jacket",
      category: "Men's Fashion",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
      price: 2499,
      oldPrice: 3299,
      quantity: 1,
      size: "L",
      color: "Black",
    },
    {
      id: 2,
      title: "Classic Minimal Sneakers",
      category: "Footwear",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
      price: 1899,
      oldPrice: 2499,
      quantity: 2,
      size: "9",
      color: "White",
    },
    {
      id: 3,
      title: "Premium Cotton Shirt",
      category: "Men's Fashion",
      image:
        "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=900&q=85",
      price: 1299,
      oldPrice: 1699,
      quantity: 1,
      size: "M",
      color: "Sky Blue",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  // ==============================
  // INCREASE QUANTITY
  // ==============================

  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      })
    );
  };

  // ==============================
  // DECREASE QUANTITY
  // ==============================

  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: Math.max(1, item.quantity - 1),
          };
        }

        return item;
      })
    );
  };

  // ==============================
  // REMOVE PRODUCT
  // ==============================

  const removeItem = (id) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  // ==============================
  // APPLY PROMO
  // ==============================

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === "NEXORA10") {
      setPromoApplied(true);
    }
  };

  // ==============================
  // CALCULATIONS
  // ==============================

  let subtotal = 0;
  let originalTotal = 0;

  for (let i = 0; i < cartItems.length; i++) {
    subtotal =
      subtotal +
      cartItems[i].price * cartItems[i].quantity;

    originalTotal =
      originalTotal +
      cartItems[i].oldPrice * cartItems[i].quantity;
  }

  const productDiscount = originalTotal - subtotal;

  const promoDiscount = promoApplied
    ? Math.round(subtotal * 0.1)
    : 0;

  const deliveryCharge =
    subtotal >= 3000 || subtotal === 0 ? 0 : 99;

  const total =
    subtotal -
    promoDiscount +
    deliveryCharge;

  // ==============================
  // TOTAL ITEMS
  // ==============================

  let totalItems = 0;

  for (let i = 0; i < cartItems.length; i++) {
    totalItems = totalItems + cartItems[i].quantity;
  }

  // ==============================
  // FORMAT PRICE
  // ==============================

  const formatPrice = (price) => {
    return `₹${price.toLocaleString("en-IN")}`;
  };

  // ==============================
  // EMPTY CART
  // ==============================

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#f6f7f5] px-4 py-8 sm:px-6 lg:px-8">

        <div className="mx-auto flex min-h-[75vh] max-w-[900px] items-center justify-center">

          <div className="w-full rounded-[30px] border border-[#EAECF0] bg-white px-6 py-12 text-center shadow-[0_15px_50px_rgba(16,24,40,0.06)] sm:px-10 sm:py-16">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-orange-500 sm:h-24 sm:w-24">
              <FiShoppingBag size={38} />
            </div>

            <p className="mt-7 text-[10px] font-bold uppercase tracking-[2.5px] text-orange-500">
              YOUR SHOPPING BAG
            </p>

            <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-[#101828] sm:text-3xl">
              Your cart is empty
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#667085]">
              Looks like you haven't added anything to your cart yet.
              Discover something you'll love.
            </p>

            <button
              onClick={() => navigate("/")}
              className="mx-auto mt-7 flex h-12 items-center justify-center gap-2 rounded-xl bg-[#101828] px-7 text-sm font-bold text-white shadow-lg transition hover:bg-orange-500"
            >
              Continue Shopping
              <FiArrowRight size={17} />
            </button>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f7f5] px-3 py-5 sm:px-5 sm:py-7 md:px-7 lg:px-8 lg:py-8">

      <div className="mx-auto max-w-[1400px]">

        {/* =====================================
            TOP HEADER
        ===================================== */}

        <div className="mb-6 flex flex-col justify-between gap-4 sm:mb-8 sm:flex-row sm:items-end">

          <div>

            <button
              onClick={() => navigate(-1)}
              className="mb-4 flex items-center gap-2 text-xs font-semibold text-[#667085] transition hover:text-orange-500"
            >
              <FiArrowLeft size={14} />
              Continue Shopping
            </button>

            <p className="text-[9px] font-bold uppercase tracking-[2.5px] text-orange-500 sm:text-[10px]">
              NEXORA SHOPPING
            </p>

            <h1 className="mt-1 text-2xl font-extrabold tracking-[-0.5px] text-[#101828] sm:text-3xl md:text-4xl">
              Your Cart
            </h1>

            <p className="mt-1.5 text-xs text-[#667085] sm:text-sm">
              {totalItems} {totalItems === 1 ? "item" : "items"} in
              your shopping bag
            </p>

          </div>

          {/* CART STATUS */}

          <div className="flex w-fit items-center gap-2 rounded-full border border-[#EAECF0] bg-white px-3 py-2 shadow-sm">

            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-50 text-orange-500">
              <FiShoppingBag size={13} />
            </div>

            <div>
              <p className="text-[8px] font-bold uppercase tracking-wide text-[#98A2B3]">
                Cart Value
              </p>

              <p className="text-xs font-extrabold text-[#101828]">
                {formatPrice(total)}
              </p>
            </div>

          </div>
        </div>

        {/* =====================================
            MAIN GRID
        ===================================== */}

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_390px] xl:gap-7">

          {/* =================================
              LEFT CART SECTION
          ================================= */}

          <div className="min-w-0">

            {/* CART CARD */}

            <div className="overflow-hidden rounded-[24px] border border-[#EAECF0] bg-white shadow-[0_10px_35px_rgba(16,24,40,0.05)]">

              {/* CARD HEADER */}

              <div className="flex items-center justify-between border-b border-[#EAECF0] px-4 py-4 sm:px-6 sm:py-5">

                <div>
                  <h2 className="text-sm font-extrabold text-[#101828] sm:text-base">
                    Shopping Bag
                  </h2>

                  <p className="mt-0.5 text-[10px] text-[#98A2B3] sm:text-xs">
                    Review your selected products
                  </p>
                </div>

                <span className="rounded-full bg-[#F2F4F7] px-2.5 py-1 text-[9px] font-bold text-[#475467] sm:px-3 sm:text-[10px]">
                  {cartItems.length} PRODUCTS
                </span>

              </div>

              {/* PRODUCTS */}

              <div className="divide-y divide-[#EAECF0]">

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 sm:p-5 md:p-6"
                  >

                    <div className="flex gap-3.5 sm:gap-5">

                      {/* PRODUCT IMAGE */}

                      <div className="relative h-[125px] w-[105px] shrink-0 overflow-hidden rounded-xl bg-[#F2F4F7] sm:h-[155px] sm:w-[130px] md:h-[170px] md:w-[145px]">

                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition duration-500 hover:scale-105"
                        />

                        {item.oldPrice > item.price && (
                          <span className="absolute left-2 top-2 rounded-full bg-orange-500 px-2 py-1 text-[7px] font-bold text-white sm:text-[8px]">
                            SALE
                          </span>
                        )}

                      </div>

                      {/* PRODUCT CONTENT */}

                      <div className="flex min-w-0 flex-1 flex-col">

                        {/* TITLE + DELETE */}

                        <div className="flex items-start justify-between gap-2">

                          <div className="min-w-0">

                            <p className="text-[8px] font-bold uppercase tracking-[1.2px] text-orange-500 sm:text-[9px]">
                              {item.category}
                            </p>

                            <h3 className="mt-1 line-clamp-2 text-sm font-bold leading-5 text-[#101828] sm:text-base sm:leading-6">
                              {item.title}
                            </h3>

                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            aria-label="Remove product"
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#98A2B3] transition hover:bg-red-50 hover:text-red-500"
                          >
                            <FiTrash2 size={15} />
                          </button>

                        </div>

                        {/* PRODUCT OPTIONS */}

                        <div className="mt-2 flex flex-wrap gap-2">

                          <span className="rounded-md bg-[#F9FAFB] px-2 py-1 text-[9px] font-semibold text-[#667085] sm:text-[10px]">
                            Size: {item.size}
                          </span>

                          <span className="rounded-md bg-[#F9FAFB] px-2 py-1 text-[9px] font-semibold text-[#667085] sm:text-[10px]">
                            Color: {item.color}
                          </span>

                        </div>

                        {/* BOTTOM */}

                        <div className="mt-auto flex flex-col gap-3 pt-3 sm:flex-row sm:items-end sm:justify-between sm:pt-5">

                          {/* QUANTITY */}

                          <div className="flex h-9 w-[105px] items-center justify-between rounded-lg border border-[#D0D5DD] bg-white px-1 sm:h-10 sm:w-[115px]">

                            <button
                              onClick={() =>
                                decreaseQuantity(item.id)
                              }
                              className="flex h-7 w-7 items-center justify-center rounded-md text-[#475467] transition hover:bg-[#F2F4F7]"
                            >
                              <FiMinus size={12} />
                            </button>

                            <span className="text-xs font-bold text-[#101828]">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                increaseQuantity(item.id)
                              }
                              className="flex h-7 w-7 items-center justify-center rounded-md text-[#475467] transition hover:bg-[#F2F4F7]"
                            >
                              <FiPlus size={12} />
                            </button>

                          </div>

                          {/* PRICE */}

                          <div className="text-left sm:text-right">

                            <div className="flex items-center gap-2 sm:justify-end">

                              <span className="text-[15px] font-extrabold text-[#101828] sm:text-lg">
                                {formatPrice(
                                  item.price *
                                    item.quantity
                                )}
                              </span>

                              {item.oldPrice >
                                item.price && (
                                <span className="text-[10px] text-[#98A2B3] line-through sm:text-xs">
                                  {formatPrice(
                                    item.oldPrice *
                                      item.quantity
                                  )}
                                </span>
                              )}

                            </div>

                            <p className="mt-0.5 text-[9px] text-[#98A2B3]">
                              {formatPrice(item.price)} each
                            </p>

                          </div>

                        </div>

                      </div>
                    </div>

                    {/* MOBILE ACTIONS */}

                    <div className="mt-3 flex items-center gap-3 border-t border-[#F2F4F7] pt-3 sm:hidden">

                      <button className="flex items-center gap-1.5 text-[10px] font-semibold text-[#667085] transition hover:text-orange-500">
                        <FiHeart size={13} />
                        Move to Wishlist
                      </button>

                    </div>

                  </div>
                ))}

              </div>
            </div>

            {/* =================================
                BENEFITS
            ================================= */}

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">

              <div className="rounded-2xl border border-[#EAECF0] bg-white p-4 shadow-sm">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <FiTruck size={16} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#101828]">
                      Free Delivery
                    </p>

                    <p className="mt-0.5 text-[9px] text-[#98A2B3]">
                      On orders above ₹3,000
                    </p>
                  </div>

                </div>

              </div>

              <div className="rounded-2xl border border-[#EAECF0] bg-white p-4 shadow-sm">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF3] text-[#039855]">
                    <FiShield size={16} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#101828]">
                      Secure Checkout
                    </p>

                    <p className="mt-0.5 text-[9px] text-[#98A2B3]">
                      100% secure payment
                    </p>
                  </div>

                </div>

              </div>

              <div className="rounded-2xl border border-[#EAECF0] bg-white p-4 shadow-sm">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EFF8FF] text-[#1570EF]">
                    <FiCheck size={16} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#101828]">
                      Easy Returns
                    </p>

                    <p className="mt-0.5 text-[9px] text-[#98A2B3]">
                      Simple return process
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* =================================
              RIGHT ORDER SUMMARY
          ================================= */}

          <div className="h-fit xl:sticky xl:top-5">

            <div className="overflow-hidden rounded-[24px] border border-[#EAECF0] bg-white shadow-[0_12px_40px_rgba(16,24,40,0.07)]">

              {/* SUMMARY HEADER */}

              <div className="border-b border-[#EAECF0] bg-[#101828] px-5 py-5 text-white sm:px-6">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[2px] text-orange-400">
                      ORDER SUMMARY
                    </p>

                    <h2 className="mt-1 text-lg font-extrabold sm:text-xl">
                      Checkout
                    </h2>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <FiShoppingBag size={18} />
                  </div>

                </div>

              </div>

              {/* SUMMARY BODY */}

              <div className="p-5 sm:p-6">

                {/* PROMO */}

                <div>

                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[1px] text-[#667085]">
                    Have a promo code?
                  </p>

                  <div className="flex h-11 overflow-hidden rounded-xl border border-[#D0D5DD] bg-white">

                    <div className="flex w-10 shrink-0 items-center justify-center text-[#98A2B3]">
                      <FiTag size={15} />
                    </div>

                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) =>
                        setPromoCode(e.target.value)
                      }
                      placeholder="Enter code"
                      className="min-w-0 flex-1 bg-transparent text-xs font-medium text-[#101828] outline-none placeholder:text-[#98A2B3]"
                    />

                    <button
                      onClick={applyPromo}
                      className="px-3 text-[10px] font-bold text-orange-500 transition hover:bg-orange-50 sm:px-4"
                    >
                      Apply
                    </button>

                  </div>

                  {promoApplied && (
                    <div className="mt-2 flex items-center gap-1.5 text-[10px] font-semibold text-[#039855]">
                      <FiCheck size={12} />
                      NEXORA10 applied successfully
                    </div>
                  )}

                  {!promoApplied && (
                    <p className="mt-2 text-[9px] text-[#98A2B3]">
                      Try <span className="font-bold text-orange-500">NEXORA10</span>{" "}
                      for 10% off
                    </p>
                  )}

                </div>

                {/* DIVIDER */}

                <div className="my-5 h-px bg-[#EAECF0]" />

                {/* PRICE BREAKDOWN */}

                <div className="space-y-3">

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#667085]">
                      Original Price
                    </span>

                    <span className="font-semibold text-[#475467]">
                      {formatPrice(originalTotal)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#667085]">
                      Product Discount
                    </span>

                    <span className="font-bold text-[#039855]">
                      - {formatPrice(productDiscount)}
                    </span>
                  </div>

                  {promoApplied && (
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#667085]">
                        Promo Discount
                      </span>

                      <span className="font-bold text-[#039855]">
                        - {formatPrice(promoDiscount)}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#667085]">
                      Delivery
                    </span>

                    <span className="font-bold text-[#039855]">
                      {deliveryCharge === 0
                        ? "FREE"
                        : formatPrice(deliveryCharge)}
                    </span>
                  </div>

                </div>

                {/* TOTAL */}

                <div className="my-5 rounded-2xl bg-[#F9FAFB] p-4">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[1px] text-[#98A2B3]">
                        Total Amount
                      </p>

                      <p className="mt-1 text-xl font-extrabold text-[#101828] sm:text-2xl">
                        {formatPrice(total)}
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                      <FiCreditCard size={18} />
                    </div>

                  </div>

                  <p className="mt-2 text-[9px] text-[#98A2B3]">
                    Inclusive of all applicable taxes
                  </p>

                </div>

                {/* CHECKOUT */}

                <button
                  onClick={() => console.log("Proceed to Checkout")}
                  className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-orange-500 text-sm font-extrabold text-white shadow-[0_10px_25px_rgba(249,115,22,0.25)] transition duration-200 hover:bg-orange-600 hover:shadow-[0_12px_30px_rgba(249,115,22,0.35)]"
                >
                  Proceed to Checkout

                  <FiArrowRight
                    size={17}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>

                {/* SECURITY */}

                <div className="mt-4 flex items-center justify-center gap-2 text-[9px] font-medium text-[#98A2B3]">

                  <FiLock size={11} />

                  <span>Secure & encrypted checkout</span>

                </div>

                {/* PAYMENT METHODS */}

                <div className="mt-5 border-t border-[#EAECF0] pt-4">

                  <p className="mb-3 text-center text-[8px] font-bold uppercase tracking-[1.5px] text-[#98A2B3]">
                    We Accept
                  </p>

                  <div className="flex items-center justify-center gap-2">

                    <div className="flex h-7 items-center rounded-md border border-[#EAECF0] bg-white px-2 text-[8px] font-bold text-[#475467]">
                      VISA
                    </div>

                    <div className="flex h-7 items-center rounded-md border border-[#EAECF0] bg-white px-2 text-[8px] font-bold text-[#475467]">
                      MASTER
                    </div>

                    <div className="flex h-7 items-center rounded-md border border-[#EAECF0] bg-white px-2 text-[8px] font-bold text-[#475467]">
                      UPI
                    </div>

                    <div className="flex h-7 items-center rounded-md border border-[#EAECF0] bg-white px-2 text-[8px] font-bold text-[#475467]">
                      COD
                    </div>

                  </div>

                </div>

              </div>
            </div>

            {/* SAVING MESSAGE */}

            {productDiscount > 0 && (
              <div className="mt-3 rounded-xl border border-[#ABEFC6] bg-[#ECFDF3] px-4 py-3">

                <div className="flex items-center gap-2">

                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[#039855]">
                    <FiCheck size={13} />
                  </div>

                  <p className="text-[10px] font-semibold leading-4 text-[#027A48]">
                    Nice choice! You're saving{" "}
                    <span className="font-extrabold">
                      {formatPrice(productDiscount)}
                    </span>{" "}
                    on this order.
                  </p>

                </div>

              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;