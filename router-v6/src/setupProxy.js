const { createProxyMiddleware } = require('http-proxy-middleware');

// 反向代理
module.exports = function(app) {
  // 中间件
  app.use(
    // 以ajax开头
    '/ajax',
    createProxyMiddleware({
      // 拼接转发
      target: 'https://i.maoyan.com',
      changeOrigin: true,
    })
  );
};