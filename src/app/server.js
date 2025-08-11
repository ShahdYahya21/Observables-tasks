const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/api/data', async (req, res) => {
  // Simulate async delay
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  res.json({ message: 'Hello from fake async API!', time: new Date() });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
