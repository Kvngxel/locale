import axios from 'axios';

// Replace 'YOUR_API_KEY' with your Xe API key
const apiKey = 'YOUR_API_KEY';

async function getLiveExchangeRates() {
  try {
    const response = await axios.get('https://xecdapi.xe.com/v1/marketdata/live', {
      headers: {
        'Authorization': `Basic ${apiKey}`,
      },
      params: {
        currencies: 'USD,EUR,GBP', // Specify the currencies you want to retrieve
      },
    });

    console.log('Live Exchange Rates:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

getLiveExchangeRates();
