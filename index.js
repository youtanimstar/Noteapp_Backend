const express = require("express");
const { connectMongoDB } = require("./connect");
const app = express();
require("dotenv").config();
const userRouter = require("./routes/index")

//middleware
app.use(express.json());

PORT = process.env.PORT || 3000;

//mongodb connection
connectMongoDB(`${process.env.DB_URL}`).then(() =>
  console.log("MongoDB connected")
);

// Routes
app.use("/api/v1",userRouter)

app.listen(PORT, () =>
  console.log(`Server Started at ${process.env.PORT} port`)
);
