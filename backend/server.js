import express from "express"; // Importing the express library
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.routes.js";


dotenv.config();

// Creating an instance of express
const app = express();

app.use(express.json());

app.use("/api/products",productRoutes);

// Setting up the port our site will run on
app.listen( 5000, () => {
    connectDB(); // connecting to the database
    console.log('Server started at http://localhost:5000');
})
