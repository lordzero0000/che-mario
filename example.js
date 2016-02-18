var request = require('request');

module.exports = {

  fannyCalls: function (swag) {
    return swag + 1;
  },

  currencyApi: function () {
    var promise = new Promise(function(resolve, reject) {
      var options = {
        method: 'GET',
        url: 'http://api.fixer.io/latest'
      };

      request(options, function (error, response, body) {
        if (error) {
          reject(error);
        } else {
          resolve(body);
        }
      });
    });
    return promise;
  }

};
