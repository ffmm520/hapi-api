const Joi = require('@hapi/joi');

const schema = Joi.object({
  orderId: Joi.string().max(4).required().error(new Error('参数校验失败'))
});

const ordersValidate = async (obj) => {
  const { error, value } = await schema.validate(obj);
  if(error) {
    return error.message;
  }else {
    return value
  }
};

module.exports = ordersValidate;