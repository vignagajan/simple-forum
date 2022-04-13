const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.port || 5000

const app = express()

app.use('/api/topics', require('./routes/topicRoutes'))

app.listen(port, ()=> console.log(`Server has started on port ${port}`))
