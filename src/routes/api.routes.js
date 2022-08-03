const {Router} = require('express');
const multer = require("multer")
const storage = require('../config/multer.config') 
const upload = multer(storage);
const router = Router();

const {newReport,
       getReports,
       getReport,
       deleteReport,
       newUser,
       getUser, 
       getUsers,
       deleteUser
    } = require('../Controllers/api.controller');

//-------------- Rutas de Reportes --------------//
//Obtener todos los reportes
router.get('/api/report', getReports)
//Obtener un solo reporte
router.get('/api/report/:id', getReport)
//Crear nuevo Reporte
router.post('/api/report', upload.single("image"), newReport)
//Eliminar un Reporte
router.delete('/api/deleteReport/:id', deleteReport)



//-------------- Rutas de Usuarios --------------//
//Obtener todos los usuarios
router.get('/api/user', getUsers)
//Obtener un solo usuario
router.get('/api/user/:id', getUser)
//Crear nuevo usuario
router.post('/api/user', newUser)
//Eliminar un usuario
router.delete('/api/user/:id', deleteUser)


module.exports = router;