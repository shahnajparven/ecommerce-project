const app = require("./app");
const cloudinary = require("cloudinary");

const connectDatabase = require("./config/database");

//config 

if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "node/config/config.env" });
  }
  

//connecting database
connectDatabase();

cloudinary.config({
  
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,

});



app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`)
});


  
   