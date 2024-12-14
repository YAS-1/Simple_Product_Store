import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/products.controller.js";


const router = express.Router();

//The get method runs the getProducts function
router.get("/", getProducts);

//The post method runs the createProduct function
router.post("/", createProduct);

//The delete method runs the deleteProduct function
router.delete("/:id", deleteProduct);

//The put method runs the updateProduct function
router.put("/:id", updateProduct);

export default router;