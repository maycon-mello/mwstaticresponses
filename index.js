const express = require('express');
const app = new express();

app.use(express.static('public'));

app.get('/', (req, res) => res.end('Server is running'));

app.get('/ShoppingCart/index.cfm',
  (req, res) => res.sendFile('plexus_review.html', { root: './pages' })
);

app.listen(80, () => console.log('Server running on port 9090'));
