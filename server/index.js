const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const dbConnection = require("./config/db.config");
dotenv.config();

const signupRouter = require("./routes/user.route.js");

const app = express();
app.use(express.json());
app.use(cors("*"));

//db invocation
dbConnection();

app.get("/", (res, req) => {
  res(<div>News Hub Backend</div>);
});

//routes
app.use("/api", signupRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
