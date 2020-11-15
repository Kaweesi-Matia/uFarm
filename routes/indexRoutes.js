

const express = require('express');
const router = express.Router();
const Registration = require("../model/registration")

// specify what to do when user hit the '/'(home page) route/endpoint
router.get('/', (req,res)=>{
    res.render('form', { title: 'Registration form' })
})
//save data to database
// router.post('/', (req,res)=>{

//    console.log(req.body);
   
//    const registration = new Registration(req.body);
//    registration.save()
//     .then(() => { res.send('Thank you for your registration!'); })
//     .catch((err) => {
//         console.log(err);
//         res.send('Sorry! Something went wrong.');
//     });

    // res.render('form', { title: 'Registration form' })
//  }) 
 
    //save data  to the database
    router.post("/",async(req,res)=>{
        
        try{
            const registration = new Registration(req.body)
            await registration.save(()=>{
                // res.send("Thankyou for registration")
                console.log("save successfully")
                res.send('Thank you for your registration!')
                //  res.redirect("/userlist")

            })
        }
        catch(err){
            res.status(400).send("sorry something went wrong")
            console.log(err)
        }
    })


    
     //Retrieve data from the database
    router.get("/userlist",async(req,res)=>{
        try{
           
            let items = await Registration.find()
            if(req.query.gender){
                items=await Registration.find({gender: req.query.gender})
            }
            //  console.log(items)
            // res.render("list",{users: items})
            res.render("list",{ title: "user list",users: items})
        }
        catch(err){
            res.status(400).send("unable to find items in the database");
        }
       

     })
    router.post("/delete",async(req,res)=>{
        try{
            await Registration.deleteOne({_id: req.body.id})
            res.redirect("back")

        }
        catch(err){
            res.status(400).send("unable to delete item   in the database");

        }
       
    })
    router.get("/update/:id",async(req,res)=>{
        try{
            const UpdateUser = await Registration.findOne({_id:req.params.id})
            res.render("updatepage",{user: UpdateUser})
        }
        catch(err){
            res.status(400).send("unable to find items in the database");
        }


    })
    router.post("/update/:id",async(req,res)=>{
        try{
            const UpdateUser = await Registration.findOneAndUpdate({_id:req.params.id},req.body)
            res.redirect("/userlist")
        }
        catch(err){
            res.status(404).send("unable to update item in the database");
        }


    })
    
    
   
  
        
    
    

    


 module.exports = router;

