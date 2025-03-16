const express = require('express')
const app = express()
const port = 3000

app.get('/products/:productId', (req, res) => {
  const productId = req.params.productId;

  // Fetch product details (mock data for example)
  const response = {
      id: productId,
      name: 'Product 01',
  };

  res.json(response);
})

app.get('/products', (req, res) => {

  const response = [
    {
      id: 1,
      name: 'Product 01',
    },
    {
      id: 2,
      name: 'Product 02',
    }
  ];

  res.json(response)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})