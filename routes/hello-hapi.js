const Joi = require('@hapi/joi');

// 路由模块
module.exports = [
  // 路由1：/hapi
  {
    method: 'GET',
    path: '/hapi',
    handler: async (req, res) => {
      return 'hello hapi';
    },
    config: {
      tags: ['api', 'test'],
      description: 'hapi路由'
    }
     
  },
  // 路由2：/joi
  {
    method: 'GET',
    path: '/joi',
    handler: (req, res) => {
      return 'hello joi';
    },
    config: {
      tags: ['api', 'test'],
      description: 'joi路由'
    }
  }
]