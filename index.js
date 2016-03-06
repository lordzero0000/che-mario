var _ = require('./example.js');

_.currencyApi().then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});
