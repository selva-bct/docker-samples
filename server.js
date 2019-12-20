const app = require('express')()
const bodyParser = require('body-parser')
const {
    get,
    set
} = require('./redis-service')
app.use(bodyParser.json())

// Listen to the incoming get request
app.get('/redis/:message', async (request, response, next) => {
    try {
        const message = request.params.message
        const key = "message"
        let oldMessage = await get(key)
        await set(key, message)
        const retrievedMessage = await get(key)
        response.json({
            previousMessage: oldMessage,
            newMessage: retrievedMessage
        })
    } catch (error) {
        console.log('error while setting data to ', error)
        response.json({
            message: 'error'
        })
    }
})


app.listen(3000, (err) => {
  if(err) {
      console.log("Error starting server", err)
  } else {
      console.log("Server started in port 3000")
  }
})