const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
var cors = require('cors');
const dotenv = require('dotenv')

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();

let db;

async function connectToDatabase() {
  const client = new MongoClient(process.env.MONGODB_URI);
  const componentsCollection = client.db("pc-builder").collection("products");

  try {
    await client.connect();
    db = client.db();

    app.get('/components', async (req, res) => {
      const query = {};
      const result = await componentsCollection.find(query).toArray();
      res.send(result);
    });
    app.get('/components/:id', async (req, res) => {
      const id = req.params.id
      console.log(id);
      const query = { _id: new ObjectId(id) }
      const result = await componentsCollection.find(query).toArray();
      res.send(result);
    });
    app.get('/products/:category', async (req, res) => {
      const category = req.params.category
      const query = { category: { $regex: new RegExp('^' + category, 'i') } }
      const result = await componentsCollection.find(query).toArray();
      res.send(result);
    });

  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectToDatabase();
});

