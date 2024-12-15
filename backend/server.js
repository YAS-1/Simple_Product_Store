import express from "express"; // Importing the express library
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.routes.js";


dotenv.config();

// Creating an instance of express
const app = express();

const PORT = process.env.PORT || 5000

app.use(express.json());

app.use("/api/products",productRoutes);

// Setting up the port our site will run on
app.listen( PORT, () => {
    connectDB(); // connecting to the database
    console.log('Server started at http://localhost:' + PORT);
});
