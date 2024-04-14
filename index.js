const express = require("express");
const { connectMongoDB } = require("./connect");
const app = express();
require("dotenv").config();
const userRouter = require("./routes/index")

//middleware
app.use(express.json());

//mongodb connection
connectMongoDB(`${process.env.DB_URL}/${process.env.DB_NAME}`).then(() =>
  console.log("MongoDB connected")
);

// Routes
app.use("/api/v1",userRouter)

app.listen(process.env.PORT, () =>
  console.log(`Server Started at ${process.env.PORT} port`)
);
