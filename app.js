const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const postsRoute = require("./routes/posts");
const cors = require("cors");

const app = express();
app.use(cors()); // to access another domain
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("We are on home");
});

//connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");
  }
);

app.listen(3000);
