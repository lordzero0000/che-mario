var request = require('request');

module.exports = {

  fannyCalls: function (swag) {
    return swag + 1;
  },

  currencyApi: function () {
    var promise = new Promise((resolve, reject) => {
      var options = {
        method: 'GET',
        url: 'http://api.fixer.io/latest'
      };

      request(options, (error, response, body) => {
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
