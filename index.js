const express = require('express');
const app = new express();

app.use(express.static('public'));

app.get('/', (req, res) => res.end('Server is running'));

// app.get('/ShoppingCart/index.cfm',
//   (req, res) => res.sendFile('loggedIn_confirmation.html', { root: './pages' })
// );

app.get('/ShoppingCart/index.cfm',
  (req, res) => res.sendFile('retail_confirmation2.html', { root: './pages' })
);

// app.get('/ShoppingCart/index.cfm',
//   (req, res) => res.sendFile('plexus_review.html', { root: './pages' })
// );

app.get('/Application/index.cfm',
  (req, res) => res.sendFile('preferred_confirmation.html', { root: './pages' })
);

app.get('/test',
  (req, res) => res.sendFile('test.html', { root: './pages' })
);

app.get('/test_json',
  (req, res) => res.sendFile('test_json.json', { root: './pages' })
);

app.get('/scart/register.asp',
  (req, res) => res.sendFile('puritan_register.html', { root: './pages' })
);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));
