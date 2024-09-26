const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const blogRoutes = require("./routes/blogroutes");
const authRoutes = require("./routes/authroutes");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');

dotenv.config();
const USER_NAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_URI = `mongodb+srv://${USER_NAME}:${PASSWORD}@cluster0.gdx5cap.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

// creating an app
const app = express();
let port = 4000;

//* creating a mongoDB connection and then only starting our app
mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("connected to database");
    app.listen(port, () => {
      console.log(`server started on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to database", err);
    process.exit(1); // Exit the process with a failure code
  });

const corsOptions = {
  origin: "http://localhost:3000", // Specify the origin that is allowed to access the server
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));

// Middleware to parse cookies
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello this is index page");
});

//* blog routes
app.use("/blogs", blogRoutes);

//* auth routes
app.use("/auth", authRoutes);

//* handle Error
app.use((req, res) => {
  res.status(404).send("error occured --");
});
