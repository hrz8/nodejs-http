const http = require("http");
const url = require('url');

const routes = {
  '/': {
    'GET': function(req, res) {
      const foo = {};
      console.log(foo.bar.zoo);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('welcome');
    }
  },
  '/login': {
    'GET': function(req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('silahkan login');
    },
    'POST': function(req, res) {
      const query = url.parse(req.url, true).query;

      if (query.un !== 'hirzi' || query.pw !== '123456') {
        throw new Error('credential error!!!')
      }

      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('loading login ...');
    }
  },
  '/dashboard': {
    'GET': function(req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('ini table');
    }
  }
};

const errorHandler = (err, req, res) => {
  console.error(err);
  
  if (err.message === 'credential error!!!') {
    res.writeHead(401, {'Content-Type': 'text/html'});
    res.end('Unauthorized');
  }

  res.writeHead(500, {'Content-Type': 'text/html'});
  res.end('Internal Server Error');
}

const server = http.createServer(function (request, response) {
  const baseUrl = request.url.split('?')[0]

  const foundRoute = routes[baseUrl];

  if (!foundRoute) {
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.end('Not Found');

    return;
  }

  try {
    foundRoute[request.method](request, response);
  } catch (error) {
    errorHandler(error, request, response);
  }
});

server.listen(3001);
