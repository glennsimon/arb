const finnhub = require('finnhub');

const apiKey = finnhub.ApiClient.instance.authentications['api_key'];
apiKey.apiKey = 'c6aifiiad3id24fn2m00';
const finnhubClient = new finnhub.DefaultApi();

finnhubClient.stockCandles('GOOG', '1', 1631025000, 1631025180, (error, data, response) => {
  console.log('error: ' + error);
  console.log(data);
});