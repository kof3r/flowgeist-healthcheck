const http = require('http');

exports.createHealthChecker = function createHealthChecker({ port = 3112 } = {}) {
  const server = http.createServer((_, res) => {
    res.statusCode = 200;
    res.end();
  });

  return new Promise((resolve, reject) => {
    server.listen(port, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}
