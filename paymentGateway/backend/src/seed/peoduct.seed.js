
import mongoose from "mongoose";
import dotenv from "dotenv";
import productModel from "../models/productModel.js";

dotenv.config();

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const products = [
      {
        title: "iPhone 16",
        description: "Apple iPhone 16 smartphone",
        price: {
          amount: 79900,
          currency: "INR"
        }
      },
      {
        title: "Samsung Galaxy S25",
        description: "Samsung Galaxy premium smartphone",
        price: {
          amount: 74999,
          currency: "INR"
        }
      },
      {
        title: "Wireless Headphones",
        description: "Premium wireless headphones",
        price: {
          amount: 2999,
          currency: "INR"
        }
      }
    ];

    await productModel.insertMany(products);

    console.log("Products seeded successfully!");

  } catch (error) {
    console.log("Seed error:", error.message);

  } finally {
    await mongoose.disconnect();
  }
};

seedProducts();
