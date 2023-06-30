
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://emuyundajnr:Dragonhouse261@tonse-savings-cluster.jc95s0j.mongodb.net/Users?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    await listDatabases(client);
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

 async function listDatabases(client) {
    
   await client.db().admin().listDatabases();

   console.log("Databases:");
   databaselist.databases.forEach(db => {
    console.log('- $ (db.name)')
   });
}