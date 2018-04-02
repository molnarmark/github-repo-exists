const https = require('https');

module.exports = function(repoString) {
  return new Promise((resolve, reject) => {
    https.get('https://github.com/' + repoString, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        if (data.indexOf('<img alt="404') !== -1)
          resolve(false);
        else
          resolve(true);
      });
    });
  });
}