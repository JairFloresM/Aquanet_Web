const express           = require('express');
const path              = require('path');
const morgan            = require('morgan');
const expressLayouts    = require('express-ejs-layouts'); // ejs

// Inicializador 
const app = express();

// Configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('trust proxy', ['192.168.0.7']) // la ip de tu pc (para pruebas)


// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json())

// Rutas
app.use(require('./routes/api.routes'));



// Archivos Publicos
app.use(express.static(path.join(__dirname, 'public')))


module.exports = app;