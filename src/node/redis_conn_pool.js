var redisPool = require('redis-connection-pool')('myRedisPool', {
    host: '172.16.93.21', // default 
    port: 6379, //default 
    max_clients: 30, // defalut 
    perform_checks: false, // checks for needed push/pop functionality 
    database: 0, // database number to use 
    options: {
        auth_pass: 'ibomsredis'
    } //options for createClient of node-redis, optional 
});

redisPool.set('test-key', 'foobar', function (err) {
    redisPool.get('test-key', function (err, reply) {
        console.log(reply); // 'foobar'
    });
});
