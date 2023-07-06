const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'shopping_app';
const productsCollection = 'products';

async function connect() {
  try {
    const client = new MongoClient(url);
    await client.connect();
    console.log('Connected to the database');
    return client.db(dbName);
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

async function getProducts() {
  try {
    const db = await connect();
    return db.collection(productsCollection).find().toArray();
  } catch (error) {
    console.error('Error retrieving products:', error);
    throw error;
  }
}

async function insertProduct(product) {
  try {
    const db = await connect();
    const result = await db.collection(productsCollection).insertOne(product);
    console.log('Product inserted:', result.insertedId);
    return result.insertedId;
  } catch (error) {
    console.error('Error inserting product:', error);
    throw error;
  }
}

module.exports = {
  getProducts,
  insertProduct
};
