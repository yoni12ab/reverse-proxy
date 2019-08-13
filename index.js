const proxy = require('redbird')({
    port: 8080,
    letsencrypt: {
      path: __dirname + '/certs',
      port: 9999
    },
    ssl: {
      http2: true,
      port: 443, // <----- this needs to be here
    }
  });

//  proxy.register('localhost', 'http://localhost:8082', {ssl: true});
  proxy.register('localhost', 'http://daily.gsbprint.net', {
  ssl: {
    letsencrypt: {
      email: 'yoni12ab@gmail.com',
      production: false,
    }
  }
});