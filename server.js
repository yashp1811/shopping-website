const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('frontend'));

const products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 15.99 },
  // Add more products here
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/orders', (req, res) => {
  // ... Order processing logic ...
});

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
