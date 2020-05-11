const Joi = require('@hapi/joi');

const schema = Joi.object({
  name: Joi.string().required()
})

module.exports = [
  {
    method: 'POST',
    path: '/aaa',
    handler: (request, h) => {
      const { username, passwd } = request.payload;
      console.log(username, passwd );
      return 'post';
    },
  },
  {
    method: 'POST',
    path: '/post',
    handler: async (request, h) => {
      return 'hello hapi';
    },
    options: {
      validate: {
        payload: Joi.object({
          post: Joi.string().max(5)
        })
      }
    }
  }
]