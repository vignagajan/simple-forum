const express = require('express')
const { getComment, updateComment, deleteComment, setComment } = require('../controller/commentController')
const router = express.Router()

router.route('/:topic_id').post(setComment)
router.route('/:topic_id/:id').get(getComment)
router.route('/:topic_id/:id').put(updateComment).delete(deleteComment)

module.exports = router