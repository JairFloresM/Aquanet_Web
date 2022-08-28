const passport = require('passport');
const axios = require('../config/axios.config')
const indexController = {}



indexController.login = async(req, res) => {
    res.render('login')
}

indexController.validateLogin =  passport.authenticate('local', {
    failureRedirect: '/', 
    successRedirect: '/reportes',
    failureFlash: true
});

indexController.reports = async(req, res) => {

    const axsRes = await axios.get('/report');

    res.render('reports', {reportes : axsRes})
}



function getUri(req) {
    let protocol = req.protocol;
    let host = req.hostname;
    let url = req.originalUrl;
    let port = process.env.PORT || 4000;
  
    return `${protocol}://${host}:${port}${url}`
}


module.exports = indexController;
