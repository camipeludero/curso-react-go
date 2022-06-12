const router = require('express').Router()
const { getAllUsers } = require('../model/user.model')
const { getUserById, deleteUserById, updateUserById } = require('../controllers/user.controller')

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.delete('/:id', deleteUserById)
router.put('/:id', updateUserById)

module.exports = router