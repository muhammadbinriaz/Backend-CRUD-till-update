require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const Tasks = require("./routes/task");
const connectDB = require("./db/connect");
const notFound = require("./middlewares/notFound");

app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1/prac", Tasks);
app.use(notFound);

const port = 3300;

let start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
