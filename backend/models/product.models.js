import mongoose from "mongoose";

// creating a product collection / schema
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
},{
    timestamps: true
});

// creating the product model
const Product = mongoose.model("Product", productSchema);

export default Product;