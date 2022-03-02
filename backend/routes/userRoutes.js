const router = require('express').Router()
const userCtlr = require('../controller/userController')
const authCtlr = require('../controller/authController')
const projectCtlr = require('../controller/projectController')
const protect = require('../middleware/auth')

router.route('/register-user').post(userCtlr.register);
router.route('/login').post(authCtlr.login)
router.route('/getUsers').get(userCtlr.getUsers)
router.route('/getEmployees').get(userCtlr.getEmployees)
router.route('/view-user-projects').get(protect, projectCtlr.getProjects)

module.exports = router