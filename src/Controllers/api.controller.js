const apiController = {}
const { PrismaClient } = require('@prisma/client')
const { isNull } = require('util')
const fs = require('fs').promises
const {clearData, validateFields} = require('../helper/report.helper')
const { response } = require('../server')

const prisma = new PrismaClient()


//-------------- Reportes --------------//
//Guardar un reporte
apiController.newReport = async (req, res) => {
    let data = clearData(req.body);
    data = validateFields(data); 

    if(data && req.file) {
        data['ruta_imagen'] = req.file.path

        console.log(data)
        await prisma.report.createMany({
            data: [
                data
            ],
            skipDuplicates: true, 
        })
    
        res.send("sent succesfully");
    } else {
        //Eliminar imagen que se agrego al directorio public
        if(req.file) {
                try {
                    await fs.unlink(req.file.path)
                    console.log('File removed')
                } catch(err) {
                    console.error('Something wrong happened removing the file', err)
                }
        }

        res.status(400).json({
            status:400,
            message: 'unable to interpret'
        })
    }
    
}
//Obtener todos los reportes
apiController.getReports = async (req, res) => {
    const allReports = await prisma.report.findMany();
    res.json(allReports);
}
//Obtener un reporte
apiController.getReport = async (req, res) => {
    const reporte_id = parseInt(req.params.id);

    if(!isNaN(reporte_id)) {
        const report = await prisma.report.findUnique({ 
            where: {
                id: reporte_id
            }
        })
    
        if(report) {
            res.json(report);
        } else {
            res.status(404).json({
                status: 404,
                message: 'not found'
            })
        }
    } else {
        res.status(400).json({
            status:400,
            message: 'unable to interpret'
        })
    }
    

}
//Eliminar un reporte
apiController.deleteReport = async (req, res) => {
    const reporte_id = parseInt(req.params.id);

    if(!isNaN(reporte_id)) { // valido si es un numero
        const report = await prisma.report.findUnique({
            where: {
                id: reporte_id
            }
        })
    
        if(report) {
            const resp = await prisma.report.delete({
                where: {
                    id: reporte_id
                }
            })
    
            res.json({message: 'OK'})
        } else {
            res.status(404).json({
                status: 404,
                message: 'not found'
            })
        }
    } else {
        res.status(400).json({
            status:400,
            message: 'unable to interpret'
        })
    }

    
    
}




//-------------- Usuarios --------------//

apiController.newUser = async (req, res) => {
    const {username, password} = req.body;

    if(username && password) {

        
        await prisma.user.create({
            data: {
                username: username,
                password: password
            }
        })

        res.send("sent succesfully");

    } else {
        res.status(400).json({
            status:400,
            message: 'unable to interpret'
        })
    }

}

apiController.getUsers = async (req, res) => {
    const allUsers = await prisma.user.findMany();
    res.json(allUsers);
}

apiController.getUser = async (req, res) => {
    const search = req.params.id;
    let user = null;
    console.log(search)

    if(!isNaN(parseInt(search))) {
        user = await prisma.user.findUnique({
            where: {
                id: parseInt(search)
            }
        })
    }
     
        if(!user) {
            user = await prisma.user.findUnique({
                where: {
                    username: search
                }
            })
        }

        if(!user) {
            res.send({
                status: 404,
                message: 'not found'
            }) 
        } else {
            res.json(user);
        }
}

apiController.deleteUser = async (req, res) => {
    const user_id = parseInt(req.params.id);

    if(!isNaN(user_id)) {
        const user = await prisma.user.findUnique({
            where: {
                id: user_id
            }
        })
    
        if(user) {
            await prisma.user.delete({
                where: {
                    id: user_id
                }
            })
    
            res.json({message: 'OK'})
        } else {
            res.status(404).json({
                status: 404,
                message: 'not found'
            })
        }
    } else {
        res.status(400).json({
            status:400,
            message: 'unable to interpret'
        })
    }
}



module.exports = apiController;