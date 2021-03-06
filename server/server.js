require("dotenv").config();
const express = require('express')
const app=express();
const db = require('./db/index')
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Get all the Rooms...
app.get("/getRooms",async(req,res)=> {
    try {
        const results=  await db.query("Select * from rooms");
        console.log(results.rows);
          res.status(200).json({status:"success",data: results.rows}
      )}
     catch (error) {
        res.status(500).json({status:"failed"})
    }});


//Get a single Room...
app.get("/getRoom/:id",async(req,res)=>{
    try {
        const results=await db.query("Select *  from rooms where id=$1 ",[req.params.id]);
        res.status(200).json({ status: 'success',data :results.rows});
        console.log(results);
    } 
    catch (error) {
        res.status(500).json({status:"failed"});
    }
});
app.post('/feedback',async(req, res) => {
    try {
        const results = await db.query("INSERT INTO feedback (name,email,message) values ($1,$2,$3) returning *",[req.body.name,req.body.email,req.body.message]);
        res.status(200).json({ status: 'success',data :results.rows[0]});
    }
    catch (error) {
        res.status(400).json({status:"failed",data :""})
    }
  }); 


// //Create a Product.......

// app.post("/Create",async(req,res)=>{
//     try {
//         const results=await db.query("INSERT INTO rooms (room_id,room_type,price,room_available) values ($1,$2,$3,$4) returning *",[req.body.room_id,req.body.room_type,req.body.price,req.body.room_available]);
//         console.log(results);
//         res.status(200).json({ status: 'success',data :results.rows[0]});
//     } 
//     catch (error) {
//         res.status(500).json({status:"failed"});

//     }
// });

// //Update the Price....
// app.put('/update/:id',async(req,res)=>{
//     try {
//         const results = await db.query("UPDATE rooms SET subtitle=$1 where id=$2 returning * ",[req.body.subtitle,req.params.id]);
//         res.status(200).json({ status: 'success',data :results.rows[0]});
//         console.log(results.rows[0]);
//     } 
//     catch (error) {
//         res.status(500).json({status:"failed"});
//     }
// })


// //Delete a Product....

// app.delete('/Remove/:id',async(req,res)=>{
//     try {
//         const results=await db.query("DELETE from rooms where id=$1 ",[req.params.id]);
//         res.status(200).json({ status: 'success',data :results.rows});
//     } 
//     catch (error) {
//         res.status(500).json({status:"failed"});
//     }
// })

 //To Register a User
 app.post('/Register',async(req, res) => {
     try {
         const {email}=req.body;
         const Email=await db.query("SELECT * from users where email=$1",[email]);
         if(Email.rows[0].email === email){
             res.status(400).json({status:"email is already registered"});
         }
     } 
     catch (error) {
         const results = await db.query("INSERT INTO users (name,email,password,phonenumber,address) values ($1,$2,$3,$4,$5) returning *",[req.body.name,req.body.email,req.body.password,req.body.phonenumber,req.body.address]);
         res.status(200).json({ status: 'success',data :results.rows[0]});
     }
   });
  
   //Login Route
   app.post('/Login', async(req, res) => {
     try{
         const {email,password}=req.body;
         const Email= await db.query("SELECT * from users where email=$1 ",[req.body.email] );
         const Password=Email.rows[0].password;
          if(Email.rows[0].email === email  && Password ===password)
          {
              res.json({status:"successfully Logged in",name:Email.rows[0].name,id:Email.rows[0].user_id,phonenumber:Email.rows[0].phonenumber,address:Email.rows[0].address,email:Email.rows[0].email})
            }
           else if(Password!== password)
           res.status(401).json({data:"Incorrect Password "})
           }    
 catch(error){
   res.status(400).json({status:"Invalid input"})
 }});

 app.post('/bookings',async(req,res)=>{
    const {check_in,check_out,room_id}=req.body;
  
    
   try{
       console.log("came here")
    // const bookingsCheck_in = await db.query("SELECT room_id from bookings where check_in=$1",[req.body.check_in]);
    // console.log(bookingsCheck_in.rows[0].room_id);
    const bookingsRoom_id = await db.query("SELECT room_id from bookings where room_id=$1",[req.body.room_id]);
     console.log(bookingsRoom_id.rows[0].room_id);
     const bookingsCheck_in = await db.query("SELECT check_in from bookings where check_in=$1",[req.body.check_in]);
     console.log(bookingsCheck_in.rows[0].check_in);
      if(check_in == bookingsCheck_in.rows[0].check_in || room_id === bookingsRoom_id)
      {
        res.status(401).json({data:"Room is already Booked "})
      }
   }
   catch(err){
    const results = await db.query("INSERT INTO bookings (user_id,check_in,check_out,room_id) values ($1,$2,$3,$4) returning *",[req.body.user_id,req.body.check_in,req.body.check_out,req.body.room_id]);
    res.status(200).json({ status: 'success',data:results.rows});
   }
 })

 
 app.get('/getStatus',async(req,res)=>{
   try{
       const results=await db.query(`SELECT U.name,U.email,U.phonenumber,U.address,B.book_id,B.user_id,B.check_in,B.check_out,B.room_id FROM users U JOIN bookings B ON U.user_id=B.user_id`)
    res.status(200).json({ status: 'success',data:results.rows});
   }
   catch(error){
       res.status(404).json({ status: 'failed'});
   }
 })

 app.get('/breakfast',async(req,res)=>{
    try{
        const results=await db.query(`Select * from food where meal_type='breakfast'`)
     res.status(200).json({ status: 'success',data:results.rows});
    }
    catch(error){
        res.status(404).json({ status: 'failed'});
    }
  })
 app.get('/lunch',async(req,res)=>{
    try{
        const results=await db.query(`Select * from food where meal_type='lunch'`)
     res.status(200).json({ status: 'success',data:results.rows});
    }
    catch(error){
        res.status(404).json({ status: 'failed'});
    }
  })
 app.get('/dinner',async(req,res)=>{
    try{
        const results=await db.query(`Select * from food where meal_type='dinner'`)
     res.status(200).json({ status: 'success',data:results.rows});
    }
    catch(error){
        res.status(404).json({ status: 'failed'});
    }
  })

  app.post('/addmeals',async(req, res) => {
    try {
        
        const results=await db.query("INSERT INTO food (meal_type,meals) values ($1,$2) returning *",[req.body.meal_type,req.body.meals]);
        res.status(200).json({ status: 'success',data :results.rows[0]});
    } 
    catch (error) {
      
        res.status(404).json({ status: 'failed'});
    }
  });









const port= process.env.PORT; 

app.listen(port,()=>{
    console.log(`server runing in node on port ${port}`)
}
  );