const GROUP_NAME = 'shop';

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}`,
    handler: (request, reply) => {
      return '';
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺列表'
    }
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{shopId}/goods`,
    handler: async (request, reply) => {
      return '';
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺的商品列表'
    }
  }
]