import Product from "../models/product.js";
import dotenv from "dotenv";
import connectDatabase from "../config/database.js";
import products from "../data/product.js";

// setting dotenv file
dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("products are deleted");

    await Product.insertMany(products);
    console.log("products are added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
