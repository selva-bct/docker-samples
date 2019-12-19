const app = require('express')()
const bodyParser = require('body-parser')
const redis = require("redis")
app.use(bodyParser.json())

// Listen to the incoming request get request
app.get('/redis', (request, response, next) => {
    try {
        const ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress
        let attempts = await get(ip) || 0
        await set(ip, attempts++)
        const retrievedAttempt = await get(ip)
        response.json({
            attempt: retrievedAttempt
        })
    } catch (error) {
        console.log('error while setting data to ')
        response.json({
            message: 'error'
        })
    }
})
