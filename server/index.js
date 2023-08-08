const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// File Paths
const parentRoute = require("./routes/parentRoute");

// Configuring Middlewares
dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routing
app.use("/api/v1/", parentRoute);

// Setup server
app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGOURL)
    .then(() => {
      console.log("DB Connected successfully");
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(`Server is running on ${process.env.PORT}`);
});
