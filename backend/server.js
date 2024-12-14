import express from "express"; // Importing the express library
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.models.js";

dotenv.config();

// Creating an instance of express
const app = express();

// Creating the get method for the products page
app.post("/api/products", async (req, res) => {
    const product = req.body; // data entered by user

    if (!product.name || !product.price || !price.image) {
        return res.status(400).json({success: false, message: "Please provide all the fields"});
    }

    const newProduct = new Product(product); //Using the entered data to create a product. Use the Product model

    try {
        await newProduct.save();
        res.status(201).json({success: true, message: "Product created successfully"});
    }
    catch (error) {
        console.log("Error in creating product", error.message);
        res.status(500).json({success: false, message: "Error creating product"});
    }
});


// Setting up the port our site will run on
app.listen( 5000, () => {
    connectDB(); // connecting to the database
    console.log('Server started at http://localhost:5000');
})
