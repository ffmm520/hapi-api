const inert = require('@hapi/inert');
const vision = require('@hapi/vision');
const hapiSwagger = require('hapi-swagger');
const package = require('package');

module.exports = [
  inert,
  vision,
  {
    plugin: hapiSwagger,
    options: {
      info: {
        title: '接口文档',
        version: package.version
      },
      // 定义接口以 tags 属性分组
      grouping: 'tags',
      tags: [
        { name: 'test', description: '测试路由' },
        { name: 'shop', description: '店铺路由' },
        { name: 'orders', description: '订单路由' }
      ]
    }
  }
]