const candleBaseUrl = 'https://finnhub.io/api/v1/stock/candle?symbol=';

const now = Math.floor(Date.now() / 1000);

const aYearAgo = now - 365 * 24 * 60 * 60;
const thirtyDaysAgo = now - 30 * 24 * 60 * 60;
const timeStamp = 0;

fetch(candleBaseUrl + symbol + '&resolution=' + 'D' + '&from=' + thirtyDaysAgo + '&to=' + now + '&token=c6aifiiad3id24fn2m00')
.then((response) => {
  return response.json();
})
.then((obj) => {
  // load the results array
  console.log(obj);
  // results[symbol] = obj;
  // if (symbols[0] in results && symbols[1] in results) {
  //   processData();
  // }
})
.catch((error) => {
  console.error('Error fetching data: ', error);
});
