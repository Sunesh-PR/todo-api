const {mongoose}= require('./db/mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const {todo} = require('./models/todoModel');
const {user} = require('./models/userModel');

var app = express();
app.use(bodyParser.json());

app.post("/todo",(req,res)=>{
    var todo1 = new todo({
    text:req.body.text
  });
    todo1.save().then((doc)=>{
        res.send(req.body)
      },(e)=>{
        res.status(400).send(e)
      });
  });


// var user1 = new user({
//   email:"suneshchamp@gmail.com"
// });
//


app.listen(3000,()=>{
  console.log("Listening on port 3000...");
});
