const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 5174;

app.use(cors());
app.use(bodyParser.json());

// Endpoint to update profile data
app.post('/api/save-profile', (req, res) => {
  const data = req.body;
  fs.writeFile('./src/profileData.js', `const profileData = ${JSON.stringify(data, null, 2)};\n\nexport default profileData;\n`, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to save.' });
    }
    res.json({ message: 'Profile data saved successfully!' });
  });
});

app.listen(PORT, () => {
  console.log(`Profile data backend running at http://localhost:${PORT}`);
});
