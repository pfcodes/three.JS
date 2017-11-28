const express   = require('express')
const app       = express()

const routes    = require('./routes')


// Config

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

// Middleware

app.use(express.static(__dirname + '/public'))

// Routes

app.get('/', routes.index)

// Server

app.listen(3000)
console.log('Listening on port 3000')
