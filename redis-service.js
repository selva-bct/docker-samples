const redis = require("redis")
const client = redis.createClient({
    host: 'localhost',
    port: 6379
})

client.on('connect', function () {
    console.log('redis db connected')
})
client.on("error", function (err) {
    console.log("Error " + err)
})


const get = (key) => {
    return new Promise((resolve, reject) => {
        client.get(key, (err, result) => {
            if (err) {
                console.log("error while getting data from redis ", err)
                reject(err)
            }
            else
                resolve(result)
        })
    })
}

const set = (key, data) => {
    return new Promise((resolve, reject) => {
        client.set(key, data)
        resolve(data)
    })

}

module.exports = {
    set,
    get
}