const express = require("express");
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const path=require("path")
const indexRoutes=require("./routes/indexRoutes")
const teachingRoutes=require("./routes/teachingRoutes")
//create an express function by by calling express function

const app = express();
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


mongoose.connect("mongodb://localhost:27017/trial", ()=>{
    console.log("successfully connected to database")
})




app.set("view engine","pug")
app.set("views",path.join(__dirname,"views"))

//middleware settings
app.use(bodyparser.urlencoded({ extended: true }));


app.use("/",indexRoutes)
app.use("/",teachingRoutes)



app.get("*",(req,res)=>{
  res.send("error page")
  
})




//created a server and have it listen on port 3000
app.listen(3000, () => {
  console.log("listening on port 3000")
})
