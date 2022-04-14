const mongoose = require('mongoose')

const topicSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: [true,'Please add topic title']
        },
        body:{
            type: String,
            required: [true,'Please add topic body']
        },
        userid:{
            type: String,
            required: [true,'Please add user id']
        },
        parentid:{
            type: String,
            required: [true,'Please add parent id']
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Topic',topicSchema)