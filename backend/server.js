import express from "express"; // Importing the express library
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import path from "path";

import productRoutes from "./routes/product.routes.js";


dotenv.config();

// Creating an instance of express
const app = express();

const PORT = process.env.PORT || 5000

const __dirname = path.resolve();

// use jaso
app.use(express.json());

app.use("/api/products",productRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get( "*", (req, res) => {
        res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
    });
}

// Setting up the port our site will run on
app.listen( PORT, () => {
    connectDB(); // connecting to the database
    console.log('Server started at http://localhost:' + PORT);
});
