const asyncHandler = require('express-async-handler')

const Topic = require('../models/topicModel')

/*
    desc: Get Topic
    route: GET /api/topic
    access: Private
*/

const getTopics = asyncHandler( async (req,res) => {

    const topics = await Topic.find().populate("user")
    res.status(200).json(topics)

})

/*
    desc: Get Topic
    route: GET /api/topic
    access: Private
*/

const getMyTopics = asyncHandler( async (req,res) => {

    const topics = await Topic.find({ user: req.user.id })
    res.status(200).json(topics)

})

/*
    desc: Get Topic
    route: GET /api/topic
    access: Private
*/

const getTopic = asyncHandler( async (req,res) => {

    const topic = await Topic.findById(req.params.id)
    res.status(200).json(topic)
})

/*
    desc: Set Topic
    route: POST /api/topic/:id
    access: Private
*/

const setTopic = asyncHandler( async (req,res) => {
    if(!req.body.title){
        res.status(400)
        throw new Error('Please add title field!')
    }
    if(!req.body.body){
        res.status(400)
        throw new Error('Please add body field!')
    }


    const topic = await Topic.create({
        title: req.body.title,
        body: req.body.body,
        user: req.user.id,
    })

    res.status(200).json(topic)
})

/*
    desc: Update Topic
    route: PUT /api/topic/:id
    access: Private
*/
const updateTopic = asyncHandler( async (req,res) => {
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
    desc: Delete Topic
    route: DELETE  /api/topic/:id
    access: Private
*/
const deleteTopic = asyncHandler( async (req,res) => {
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
    getMyTopics,
    getTopic,
    setTopic,
    updateTopic,
    deleteTopic,
}