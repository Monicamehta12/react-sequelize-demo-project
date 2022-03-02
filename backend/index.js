const router = require('express').Router();

const userRoutes = require('./routes/userRoutes')
const projectRoutes = require('./routes/projectRoutes')

router.use('/user', userRoutes);
router.use('/project', projectRoutes);

module.exports = router;