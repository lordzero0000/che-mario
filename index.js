var _ = require('./example.js');

_.currencyApi().then(function (res) {
  console.log(res);
}).catch(function (err) {
  console.log(err);
});
