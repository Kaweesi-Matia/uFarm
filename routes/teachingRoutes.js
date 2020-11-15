const express =require("express")
const router=express.Router()

//  specify what to do when user hits the "/"(home page) route/endpoint/path
router.get("/",(req,res)=>{
    res.send("Home page! HelloWorld")

 })
 
// specify what to do when user hits the "/about"route/endpoint/path
router.get("/about", (req, res) => {
  res.send("About page. nice");
});
//show path params
router.get("/abt/:name", (req, res) => {
  res.send("Hello " + req.params.name );
});

//show query params
router.get("/user",(req,res)=>{
  res.send("This is class " + req.query.class +"cohort "+ req.query.cohort)
})


//express serving an index.html file
router.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
router.put("/user", (req, res) => {
  res.send("got a PUT request at /user");
});



router.post("/qoutes", (req, res) => {
  console.log(req.body)

});
module.exports=router;