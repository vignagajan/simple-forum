const mongoose = require('mongoose')

const voteSchema = mongoose.Schema(
    { 
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required: [true,'Please add a user'],
            ref: 'User'
        }
        }
        ,
        {
            timestamps: true,
        } 
);

const commentSchema = mongoose.Schema(
    { 
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required: [true,'Please add a user'],
            ref: 'User'
        },
        comment:{
            type: String,
            ref:'Comment'
        },
        votes:[voteSchema]
        }
        ,
        {
            timestamps: true,
        } 
);

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
        comments: [commentSchema]
    },
    {
        timestamps: true,
    }
)

const Topic = mongoose.model('Topic',topicSchema)
const Comment = mongoose.model('Comment',topicSchema)
const Vote = mongoose.model('Vote',topicSchema)

module.exports = { Topic, Comment, Vote }