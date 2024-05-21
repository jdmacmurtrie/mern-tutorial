import { MongoClient, ServerApiVersion } from "mongodb";
const uri =
  "mongodb+srv://jdmacmurtrie:kKCH2aRKEK7ahrY4@mern-tutorial-cluster.zh16u6w.mongodb.net/?retryWrites=true&w=majority&appName=mern-tutorial-cluster";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (err) {
  console.error(err);
}

let db = client.db("employees");

export default db;
