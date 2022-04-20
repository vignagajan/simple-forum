const mongoose = require('mongoose')

const topicSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: [true,'Please add a topic title']
        },
        body:{
            type: String,
            required: [true,'Please add a topic body']
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required: [true,'Please add a user'],
            ref: 'User'
        },
        parent:{
            type: mongoose.Schema.Types.ObjectId,
            required: [true,'Please add a parent'],
            ref:'Topic'
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Topic',topicSchema)