const pino = require('hapi-pino');

// 日志
module.exports = {
    plugin: pino,
    options: {
      prettyPrint: true,
      logEvents: ['response', 'onPostStart']
    }
}