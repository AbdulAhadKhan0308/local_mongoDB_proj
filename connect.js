// Import the MongoDB driver
const MongoClient = require("mongodb").MongoClient;

//with this url we are connecting to the server
// we could have connected to the database if url was like:
//"mongodb://localhost:27017/name_of_database"
const url = "mongodb://localhost:27017";

// Use connect method to connect to the server,
//asynchronous operation
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
  if (err) throw err;
  console.log("Connected to MongoDB server");

  // Select the database, if it exists it will be selected, if it does not exist new one will be created
  //this function is synchronous
  const db = client.db("mydatabase2");
  // Select the collection, if it exists it will be selected, if it does not exist new one will be created
  //this function is synchronous
  const collection = db.collection("col1");

  // Insert a document into the collection
  //ASYNCHRONOUS function
  collection.insertOne(
    {
      name: "John Doe",
      age: 25,
    },
    null,
    function (err, result) {
      // Close the client to terminate the connection
      client.close();
      if (err) throw err;
      console.log("Document inserted");
    }
  );
});
