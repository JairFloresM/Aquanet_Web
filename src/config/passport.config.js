const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const axios = require('../config/axios.config')


passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, user, pass, cb) => {
    const userDb = await axios.get('/user/'+ user);

    if(userDb.data.hasOwnProperty('status')){
        if(userDb.data.status == 404) {
            req.flash('error_message', 'Usuario y/o contraseña incorrecto')
            return cb(null, false)
        }
    }

    if(pass !== userDb.data.password) {
        req.flash('error_message', 'Usuario y/o contraseña incorrecto')
        return cb(null, false)
    }

    return cb(null, userDb.data)
}))

passport.serializeUser((usuario, cb) => {
    cb(null, usuario.id);
});

passport.deserializeUser(async (id, cb) => {
    const userDb = await axios.get('/user/'+ id );
    if(userDb.data.hasOwnProperty('status')) cb(userDb)
    cb(null, userDb.data)
});
