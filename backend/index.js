require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./db/dbConnect");

dbConnect();
const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(`Request Received: ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Fitness App Backend." });
});

app.use("/api", require("./routes/exerciseRoutes"));
app.use("/api", require("./routes/foodRoutes"));
app.use("/api", require("./routes/goalRoutes"));

app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
