const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017",(err,client) => {
  if(err){
    return console.log(err);
  }
  const db = client.db('todos');
  console.log("Connected to Database..");

  db.collection("Todos").insertOne({
    text: "Something 2 to do...",
    completed: false
  },(err, result) => {
    if(err){
      return console.log("Unable to insert todo",err);
    }
  });
  db.collection('Users').insertOne({
    name:'Sunesh',
    age: 19,
    location: 'Puducherry'
  },(err,result)  => {
    if(err){
      return console.log("Unable to insert User",err);
    }
  })
  client.close();
})
