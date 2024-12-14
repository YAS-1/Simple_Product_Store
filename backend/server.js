import express from "express"; // Importing the express library
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

// Creating an instance of express
const app = express();

// Creating the get method for the products page
app.get("/products", (req, res) => {
    res.send("Server is locked and loaded")// Sending a response to the client when on the home page
})


// Setting up the port our site will run on
app.listen( 5000, () => {
    connectDB(); // connecting to the database
    console.log('Server started at http://localhost:5000');
})
