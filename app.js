const Hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi');

require('dotenv').config();
require('./config/config');

const { port, host } = require('./config');
const routes = require('./routes/hello-hapi');
const shopRoutes = require('./routes/shop');
const orderRoutes = require('./routes/orders');
const testValid = require('./routes/valid-test');

const swagger = require('./plugins/hapi-swagger');
const log = require('./plugins/log');

const server = new Hapi.Server({
  port,
  host
});

// 路由
const init = async () => {
  await server.register([
    ...swagger,
    // log
  ]);

  server.route([
    ...routes,
    ...shopRoutes,
    ...orderRoutes,
    ...testValid
  ]);

  await server.start();
  console.log(`server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();
