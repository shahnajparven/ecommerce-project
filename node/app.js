const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const fileUpload = require("express-fileupload");

const errorMidleware = require("./middleware/error");
//config 

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "node/config/config.env" });
}



app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Route imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

//API
app.use("/api/v1",product);
app.use("/api/v1",user);



app.use(express.static(path.join(__dirname, "../design/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../design/build/index.html"));
});


module.exports = app;


