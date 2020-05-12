if (process.env.NODE_ENV === 'development') {
  console.log('当前环境是：development ');
  var {HOST_DEV, PORT_DEV, DB_DEV_USER, DB_DEV_PASSWORD, DB_DEV_HOST, DB_DEV_PORT,DB_DEV} = process.env
  console.log(HOST_DEV, PORT_DEV, DB_DEV_USER, DB_DEV_PASSWORD, DB_DEV_HOST, DB_DEV_PORT, DB_DEV);
} else {
  console.log('当前环境是：production ');
  var {HOST_PROD, PORT_PROD, DB_PROD_USER, DB_PROD_PASSWORD, DB_PROD_HOST, DB_PROD_PORT,DB_PROD} = process.env
  console.log(HOST_PROD, PORT_PROD, DB_PROD_USER, DB_PROD_PASSWORD, DB_PROD_HOST, DB_PROD_PORT, DB_PROD);
}

module.exports =  {
  "development": {
    "username": DB_DEV_USER,
    "password": DB_DEV_PASSWORD,
    "database": DB_DEV,
    "host": DB_DEV_HOST,
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": DB_PROD_USER,
    "password": DB_PROD_PASSWORD,
    "database": DB_PROD,
    "host": DB_PROD_HOST,
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
