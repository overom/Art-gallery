const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/api/*', { target: 'http://localhost:5001' }),
    proxy('/auth/*', { target: 'http://localhost:5001', changeOrigin: true })
  );
};
