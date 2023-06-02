const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index.routes')
const usersRouter = require('./routes/users.routes')
const carRouter = require('./routes/car.routes')
const cartRouter = require('./routes/cart.routes')

const cors = require('cors')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/car', carRouter)
app.use('/cart', cartRouter)



module.exports = app