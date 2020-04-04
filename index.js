const express = require("express");
const bodyParser = require("body-parser");
const corse = require("cors");
const app = express();
const PORT = 3000;
const page = require("./routes/sms.routes");

//CORS Middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

//Body parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/sendsms", page);

app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
});
