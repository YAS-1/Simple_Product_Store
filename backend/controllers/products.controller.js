import Product from "../models/product.models.js";
import mongoose from "mongoose";

//Getting all the products
export const getProducts = async(req, res) => {
    try{
        const products = await Product.find();
        res.status(200).json({ success: true, data: products});
    }
    catch (error){
        res.status(500).json({ success: false, message: "Error fetching products" });
    }
};


// Creating the get method for the products page
export const createProduct = async(req, res) =>{
    const product = req.body; // data entered by user

    if (!product.name || !product.price || !product.image) {
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
    
};


//deleting a product
export const deleteProduct = async(req, res) =>{
    const { id } = req.params; 

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted"});
    }
    catch (error){
        res.status(404).json({ success: false, message: "Product not found"});
    }
};


// Updating a product
export const updateProduct = async(req, res) =>{
    const { id } = req.params; // getting the id from the url

    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid product id" });
    }

    try {
        await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, message: "Product updated" });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Server Error"});
    }
};

