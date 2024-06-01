const mongoose = require("mongoose");

const dbConnection = async (req, res) => {
  await mongoose
    .createConnection(process.env.MONGODB_URI)
    .then(() => console.log("Database connected"))
    .catch((error) => console.log("Database not connected", error));
};

module.exports = dbConnection;
