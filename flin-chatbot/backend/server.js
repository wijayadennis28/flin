const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // Or use express.json()
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 5001; // Use environment variable or default

// Middleware
app.use(cors()); // Allow cross-origin requests (from React frontend)
app.use(bodyParser.json()); // Parse JSON request bodies

// Load responses
let responses = [];
try {
  const responsesPath = path.join(__dirname, 'responses.json');
  const rawData = fs.readFileSync(responsesPath);
  responses = JSON.parse(rawData);
  console.log('Chatbot responses loaded successfully.');
} catch (error) {
  console.error('Error loading responses.json:', error);
  // Provide fallback default response if file loading fails
  responses = [{ keywords: ['default'], response: "Sorry, I'm having trouble finding my responses right now." }];
}

// --- API Endpoint ---
app.post('/api/chat', (req, res) => {
  const userMessage = req.body.message?.toLowerCase() || '';
  let botResponse = responses.find(r => r.keywords.includes('default'))?.response || "Sorry, I can't respond right now."; // Default fallback

  console.log('Received message:', userMessage);

  if (!userMessage) {
      return res.json({ reply: "Please send a message." });
  }

  // Simple keyword matching logic
  for (const entry of responses) {
    // Check if any keyword in the entry's keywords array is present in the user message
    if (entry.keywords.some(keyword => userMessage.includes(keyword.toLowerCase())) && !entry.keywords.includes('default')) {
      botResponse = entry.response;
      break; // Found a match, stop searching
    }
  }

  console.log('Sending reply:', botResponse);
  res.json({ reply: botResponse });
});

// --- Server Start ---
app.listen(port, () => {
  console.log(`Chatbot backend server listening on port ${port}`);
});