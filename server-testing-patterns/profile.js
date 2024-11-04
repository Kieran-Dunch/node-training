const express = require('express');
const router = express.Router();


router.get('/alice', (req, res) => {
  res.send('<h1 id="welcome-message">Welcome alice!</h1>');
});

router.get('/bob', (req, res) => {
  res.send('<h1 id="welcome-message">Welcome bob!</h1>');
});

module.exports = router;
