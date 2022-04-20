const express = require('express')
const { registerUser, loginUser, getMe, updateMe, deleteMe } = require('../controller/userController')
const router = express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/me').get(getMe)
router.route('/me').put(updateMe).delete(deleteMe)

module.exports = router 