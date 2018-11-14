const mongodb = {
  host: "lasterranasyoga-shard-00-00-duzfa.mongodb.net:27017,lasterranasyoga-shard-00-01-duzfa.mongodb.net:27017,lasterranasyoga-shard-00-02-duzfa.mongodb.net:27017/test?ssl=true&replicaSet=LasTerranasYoga-shard-0&authSource=admin&retryWrites=true",
  username: process.env.username,
  password: process.env.password
}

module.exports = mongodb;
