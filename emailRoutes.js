const express = require('express');
const router = express.Router();

// Dummy sentiment analysis function
function analyzeSentiment(emailText) {
  if (emailText.includes('happy')) return { sentiment: 'positive', emoji: '😊' };
  if (emailText.includes('sad')) return { sentiment: 'negative', emoji: '😢' };
  return { sentiment: 'neutral', emoji: '😐' };
}

// POST /analyze
router.post('/analyze', (req, res) => {
  const { emailText } = req.body;
  const result = analyzeSentiment(emailText);
  res.json(result);
});

module.exports = router;
