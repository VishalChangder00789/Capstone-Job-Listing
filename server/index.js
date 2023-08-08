const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// File Paths
const parentRoute = require("./routes/parentRoute");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

// Configuring Middlewares
dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sequence of the middlewares are very necessary

// Routing
app.use("/api/v1/", parentRoute);

// Unhandled routes
app.all("*", (req, res, next) => {
  //#region  -- OLD WAY OF DOING
  // res.status(404).json({
  //   status: "fail",
  //   message: `Can't find ${req.originalUrl} on the server`,
  // });

  // const err = new Error(`Can't find ${req.originalUrl} on the server`);
  // err.status = "fail";
  // err.statusCode = 404;

  // If the next method has an argument no matter what it is , it will be treated as error

  //#endregion -- OLD WAY OF DOING
  next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
});

// The error handling Middlware will be called whenever there will be an argument passed into the next method
// For bugs  : 4 arguments
app.use(globalErrorHandler);

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
