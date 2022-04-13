const express = require('express')
const { getTopics, setTopics, updateTopics, deleteTopics } = require('../controller/topicController')
const router = express.Router()

router.route('/').get(getTopics).post(setTopics)
router.route('/:id').put(updateTopics).delete(deleteTopics)

module.exports = router 