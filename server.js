const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

// Middleware to parse JSON requests
app.use(bodyParser.json());

const profileDetails = {
  name: 'SRINIVAS POOSA',
  profile_image_url: 'https://assets.ccbp.in/frontend/react-js/male-avatar-img.png',
  short_bio: 'Lead Software Developer and AI-ML expert',
};

// Route to get profile details
app.get('/api/profile', (req, res) => {
  res.json({ profile_details: profileDetails });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
