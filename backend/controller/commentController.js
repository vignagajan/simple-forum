const asyncHandler = require('express-async-handler')

const { Topic , Comment, _} = require('../models/topicModel')

/*
    desc: Get Comment
    route: GET /api/comments
    access: Public
*/

const getComments = asyncHandler( async (req,res) => {

    const comments = await Topic.findById(req.user).populate('comments')

    res.status(200).json(comments)
})

/*
    desc: Set Comment
    route: POST /api/comment/:id
    access: Private
*/

const setComment = asyncHandler( async (req,res) => {

    if(!req.body.comment){
        res.status(400)
        throw new Error('Please add comment!')
    }
    
    const Topic = await Topic.findById(req.params.topic_id)

    const comment = await Topic.comments.push({
        user: req.user,
        comment: req.comment
    })

    res.status(200).json(comment)
})

/*
    desc: Update Comment
    route: PUT /api/comment/:id
    access: Private
*/
const updateComment = asyncHandler( async (req,res) => {

    const comment = await Comment.findById(req.params.topic_id).findById(req.params.id)

    if(!comment){
        res.status(400)
        throw new Error('Comment not found')
    }

    const updatedComment = await Comment.Update(
        req.params.id,req.body,{ new: true}
    )

    res.status(200).json(updatedComment)
})

/*
    desc: Delete Comment
    route: DELETE  /api/comment/:id
    access: Private
*/
const deleteComment = asyncHandler( async (req,res) => {

    const comment = await Comment.findById(req.params.topic_id).findById(req.params.id)

    if(!comment){
        res.status(400)
        throw new Error('Comment not found')
    }

    await comment.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getComments,
    setComment,
    updateComment,
    deleteComment,
}