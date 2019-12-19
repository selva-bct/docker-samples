const client = redis.createClient()

client.on('connect', function () {
    console.log('connected')
})
client.on("error", function (err) {
    console.log("Error " + err)
})

const get = (key) => {
    return new Promise((resolve, reject) => {
        client.get(key, (err, result) => {
            if (err)
                reject(err)
            else
                resolve(result)
        })
    })
}

const set = (key, data) => {
    return new Promise((resolve, reject) => {
        client.set(key, data, (err, result) => {
            if (err)
                reject(err)
            else
                resolve(result)
        })
    })

}