var PORT = 6379;
var HOST = '172.16.93.21';

var redis = require("redis");
client = redis.createClient(PORT, HOST, {auth_pass: 'ibomsredis'});

console.log(client.eventNames());

client.on('connect', function () {
    console.log('connected');
});

client.on("error", function (err) {
    console.log("error event - " + client.host + ":" + client.port + " - " + err);
});
