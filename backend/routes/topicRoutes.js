const express = require('express')
const { getTopic, updateTopic, deleteTopic, setTopic, getTopics, getMyTopics, upVoteTopic, downVoteTopic } = require('../controller/topicController')
const { getComments, addComment, deleteComment, upVoteComment, downVoteComment, updateComment } = require('../controller/commentController')
const { protect } = require('../middleware/authMiddleware')
const router = express.Router()

router.route('/all').get(getTopics)
router.route('/my').get(protect,getMyTopics)
router.route('/').post(protect ,setTopic)
router.route('/:id').get(getTopic)
router.route('/:id').put(updateTopic).delete(deleteTopic)
router.route('/:id/up').put(upVoteTopic)
router.route('/:id/down').put(downVoteTopic)

router.route('/:id/comments').get(getComments)
router.route('/:id').post(addComment)
router.route('/:id/:cid').put(updateComment)
router.route('/:id/:cid').delete(deleteComment)
router.route('/:id/:cid/up').put(upVoteComment)
router.route('/:id/:cid/down').put(downVoteComment)

module.exports = router 