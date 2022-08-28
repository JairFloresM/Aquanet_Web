const {Router} = require('express');
const router = Router();

const {login, validateLogin, reports} = require('../Controllers/index.controller')
const {isAuthenticated} = require('../helper/auth')

// GET
router.get('/', login);
router.get('/reportes',isAuthenticated, reports);

//POST
router.post('/', validateLogin)

module.exports = router;