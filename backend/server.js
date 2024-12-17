const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/api/betting-suggestions', async (req, res) => {
  try {
    // Example: Get sports data from an external API (like odds API)
    const response = await axios.get('https://api.the-odds-api.com/v4/sports/upcoming/odds/');
    const oddsData = response.data;

    // Example algorithm to suggest bets (this can be more complex)
    const suggestions = oddsData.map(event => ({
      event: event.name,
      betType: event.betType,
      odds: event.odds
    }));

    res.json({ suggestions });
  } catch (error) {
    res.status(500).send('Error fetching betting suggestions');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
