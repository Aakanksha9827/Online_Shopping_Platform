
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to My Async Await Shopping Platform!");
});

// Products API
app.get("/api/products", (req, res) => {

    fetch("https://fakestoreapi.com/products")

        .then((response) => {
            return response.json();
        })

        .then((data) => {
            res.json({ products: data });
        })

        .catch((error) => {
            console.log(error);

            res.status(500).json({
                message: "Error fetching products"
            });
        });

});

// Start Server
app.listen(5000, () => {
    console.log("Server started on port 5000");
});
