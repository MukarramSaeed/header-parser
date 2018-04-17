// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  const software = request.headers['user-agent'].match(/\(.+\)/)[0];
  const obj = {
    ipaddress:request.headers['x-forwarded-for'].split(",")[0],
    software:software.substr(1,software.length-2),
    language:request.headers['accept-language'].split(",")[0],
  };
  response.send(obj);
//  response.sendFile(__dirname + '/views/index.html')
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
