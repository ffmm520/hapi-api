const Joi = require('@hapi/joi')

const ordersValidate = require('../utils/ordersValidate')
const GROUP_NAME = 'orders'

const schema = Joi.object({
	user: Joi.string().max(4).required().error(new Error('参数校验失败')),
	passwd: Joi.string().max(5).required(),
})

module.exports = [
	{
		method: 'POST',
		path: `/${GROUP_NAME}`,
		handler: async (request, reply) => {
			return '/post orderid'
		},
		options: {
			tags: ['api', GROUP_NAME],
			description: '创建订单',
			validate: {
				payload: Joi.object({
					orderId: Joi.number().ruleset.min(1).max(10).rule({ message: 'Number must be between 1 and 10' })
				}),
				query: Joi.object({
					limit: Joi.string().max(4).error(new Error('参数太长')),
				}),
			},
		},
	},
	{
		method: 'POST',
		path: `/${GROUP_NAME}/{orderId}/pay`,
		handler: async (request, reply) => {
			// const { orderId } = request.params
			// const { error, value } = schema.validate({orderId});
			// const result = await ordersValidate({ orderId })
			/* if (error) {
        return error.message;
      } */
			return 'params valid';
		},
		options: {
      tags: ['api', GROUP_NAME],
      description: '支付某订单',
      validate: {
          params: Joi.object({
						orderId: Joi.string().max(5).required()
					})
      }
	},
	/* config: {
      tags: ['api', GROUP_NAME],
      description: '支付某订单',
    }, */
	/* options: {
      validate: {
        params: { 
          orderId: Joi.string().required() 
        }
      }
    } */
	}
]
