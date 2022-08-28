const express           = require('express');
const path              = require('path');
const morgan            = require('morgan');
const expressLayouts    = require('express-ejs-layouts'); // ejs
const session           = require('express-session'); 
const passport          = require('passport');
const flash             = require('connect-flash');

// Inicializador 
const app = express();
require('./config/passport.config')

// Configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set(expressLayouts);
app.set('view engine', 'ejs');
app.set('trust proxy', ['192.168.0.3']) // la ip de mi pc (para pruebas)


// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(session({
    secret: process.env.SECRET_PHARSE, 
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Variables Globales para request flash
app.use((req, res, next) => {
    res.locals.succes_message = req.flash('succes_message');
    res.locals.error_message = req.flash('error_message');
    res.locals.error = req.flash('error');
    res.locals.usuario = req.user || null;
    next();
});

// Rutas Api
app.use(require('./routes/api.routes'));

//Rutas de la Pagina Web
app.use(require('./routes/index.routes'));





// Archivos Publicos
app.use(express.static(path.join(__dirname, 'public')))


module.exports = app;