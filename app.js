const express = require('express')
const path = require('path')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const port = 8080
const indexRouter = require('./routes/index')
const corsOptions = {
  origin: 'http://localhost:3000'
}

const app = express()

app.use(cors(corsOptions))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', indexRouter)

app.listen(port, () => console.log(`Listening on http://localhost:${port}`))

module.exports = app
