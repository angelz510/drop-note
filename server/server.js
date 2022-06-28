const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 5050;
require("dotenv").config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/dropnote-db",
  (err) => {
    if (err) throw new Error({ msg: err });
    console.log("Connected to dropnote-db!");
  }
);

app.use("/", require("./routes/noteRoutes"));

app.listen(PORT, () =>
  console.log(`Now listening at http://localhost:${PORT}`)
);
