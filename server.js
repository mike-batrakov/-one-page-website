const express = require('express');
const app = express();

// Define a route to retrieve the OpenAI API key
app.get('/getOpenaiApiKey', (req, res) => {
  const openaiApiKey = process.env.OPENAI_API_KEY;
  res.json({ openaiApiKey });
});

// Serve the HTML file
app.use(express.static('public'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
