const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var twitter = require('twitter')
require('dotenv').config()

app.use(bodyParser.raw({ type: '*/*' }))

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

var client = new twitter({
  consumerKey: process.env.consumerKey ,
  consumerSecret: process.env.consumerSecret,
  bearer_token: process.env.bearer_token
})

app.listen(4040, function () {
  console.log('Server is running on port 4040')
})

app.get('/tweets', async (req, res) => {
  let query = req.query
  var params = { screen_name: query.twitterAccountName }
  let parsedResponse
  try{
    parsedResponse = await new Promise((resolve, reject) => {  
      client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
          resolve({ 
            data: tweets,
            errors : []
          })
        } else {
          reject()
        }
      })
    })
  }catch(err){
    parsedResponse = {
      errors : [
        "Can't reach TWITTER_API server"
      ]
    } 
  }
  let stringResponse = JSON.stringify(parsedResponse)
  res.send(stringResponse)
}) 