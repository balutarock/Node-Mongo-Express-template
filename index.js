const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", async (req, res) => {
  console.log("user login");
  return res.send("user");
});

app.use(userRoutes);

const PORT = process.env.PORT || 5000;
const MONGOOSE_URL = process.env.MONGOOSE_URL;

mongoose
  .connect(MONGOOSE_URL, { useNewUrlParser: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    })
  )
  .catch((err) => {
    console.log(err);
  });
