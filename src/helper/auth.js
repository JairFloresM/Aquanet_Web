const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()) {
        return next();
    }
    req.flash('error_message', 'No está autorizado');
    res.redirect('/');
}

module.exports = helpers;