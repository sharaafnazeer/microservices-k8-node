const express = require('express')
const axios = require('axios'); // For making HTTP requests
const app = express()
const port = 3000

app.get('/orders/:orderId', async (req, res) => {
  const orderId = req.params.orderId;

  // Fetch ordr details (mock data for example)
  const order = {
      id: orderId,
      productId: '123',
      quantity: 2,
  };

  try {
      // Fetch product details from product-microservice
      const productResponse = await axios.get(`http://product-service.microservice.svc.cluster.local/products/${order.productId}`);
      const product = productResponse.data;

      // Combine order and product details
      const response = {
          orderId: order.id,
          product: product,
          quantity: order.quantity,
      };

      res.json(response);
  } catch (error) {
      console.error('Error fetching product details:', error.message);
      res.status(500).json({ error: 'Failed to fetch product details' });
  }
});

app.get('/orders', (req, res) => {
  const response = [
    {
      orderId: 1,
      name: 'Order 01',
    },
    {
      orderId: 2,
      name: 'Order 02',
    }
  ];

  res.json(response)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})