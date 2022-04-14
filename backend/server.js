const express = require('express')
const connectDb = require('./config/db')
const errorHandler = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()
const port = process.env.port || 5000

connectDb()

const app = express()

// Handle post requests
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// Routes
app.use('/api/topics', require('./routes/topicRoutes'))

// Custom error handler
app.use(errorHandler)

app.listen(port, ()=> console.log(`Server has started on port ${port}`))
