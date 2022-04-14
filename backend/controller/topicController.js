const asyncHandler = require('express-async-handler')

const Topic = require('../models/topicModel')

/*
    desc: Get Topics
    route: GET /api/topics
    access: Private
*/

const getTopics = asyncHandler( async (req,res) => {

    const topics = await Topic.find()
    res.status(200).json(topics)
})

/*
    desc: Set Topics
    route: POST /api/topics/:id
    access: Private
*/

const setTopics = asyncHandler( async (req,res) => {
    if(!req.body.title){
        res.status(400)
        throw new Error('Please add title field!')
    }
    if(!req.body.body){
        res.status(400)
        throw new Error('Please add body field!')
    }
    if(!req.body.userid){
        res.status(400)
        throw new Error('Please add userid field!')
    }
    if(!req.body.parentid){
        res.status(400)
        throw new Error('Please add parentid field!')
    }

    const topic = await Topic.create({
        title: req.body.title,
        body: req.body.body,
        userid: req.body.userid,
        parentid: req.body.parentid,
    })

    res.status(200).json(topic)
})

/*
    desc: Update Topics
    route: PUT /api/topics/:id
    access: Private
*/
const updateTopics = asyncHandler( async (req,res) => {
    const topic = await Topic.findById(req.params.id)

    if(!topic){
        res.status(400)
        throw new Error('Topic not found')
    }

    const updatedTopic = await Topic.findByIdAndUpdate(
        req.params.id,req.body,{ new: true}
    )

    res.status(200).json(updatedTopic)
})

/*
    desc: Delete Topics
    route: DELETE  /api/topics/:id
    access: Private
*/
const deleteTopics = asyncHandler( async (req,res) => {
    const topic = await Topic.findById(req.params.id)

    if(!topic){
        res.status(400)
        throw new Error('Topic not found')
    }

    await topic.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getTopics,
    setTopics,
    updateTopics,
    deleteTopics,
}