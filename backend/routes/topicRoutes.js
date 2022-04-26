const express = require('express')
const { getTopic, updateTopic, deleteTopic, setTopic, getTopics, getMyTopics } = require('../controller/topicController')
const { getComments, addComment, deleteComment } = require('../controller/commentController')
const { protect } = require('../middleware/authMiddleware')
const router = express.Router()

router.route('/all').get(getTopics)
router.route('/my').get(protect,getMyTopics)
router.route('/').post(protect ,setTopic)
router.route('/:id').get(getTopic)
router.route('/:id').put(updateTopic).delete(deleteTopic)

router.route('/:id/comments').get(getComments)
router.route('/:id').post(protect, addComment)
router.route('/:id/:cid').delete(protect, deleteComment)
module.exports = router 