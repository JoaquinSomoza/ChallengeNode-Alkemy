const db = require('../database/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const welcomeMail = require('../email/send');


const usuariosControllers = {
    login: (req, res) => {
        const { email, password } = req.body;
        db.Usuarios.findOne({
            where: {
                email: email,
            },
        })
            .then(usuario => {
                if (!usuario) {
                    return res.status(404).json({
                        data: 'Usuario no encontrado',
                        status: 404,
                    })
                } else {
                    bcrypt.compare(password, usuario.password, (err, result) => {
                        if (result) {
                            let token = jwt.sign({
                                id: usuario.id,
                                email: usuario.email
                            }, 'secret', { expiresIn: '1h' });
                            res.status(200).json({
                                data: {
                                    token,
                                    usuario,
                                    status: 200,
                                    url: 'https://localhost:3000/auth/login'
                                }
                            })
                        } else {
                            return res.status(404).json({
                                data: 'Contraseña o token incorrecto',
                                status: 404,
                            })
                        }
                    })
                }
            })
            .catch(e => console.log(e));
    },
    register: (req, res) => {
        const { email, password } = req.body;
        let passEncriptada = bcrypt.hashSync(req.body.password, 10);
        db.Usuarios.findOne({
            where: { email: req.body.email },
        })
            .then(usuario => {
                if (usuario) {
                    return res.status(404).json({
                        data: 'El usuario ya existe',
                        status: 404,
                    })
                } 
                    db.Usuarios.create({
                        email: req.body.email,
                        password: passEncriptada,
                    })
                        .then(usuario => {
                            welcomeMail(email);
                            res.status(200).json({
                                data: usuario,
                                status: 200,
                                msg: 'Usuario creado correctamente'
                            })
                        })
                        
                
            })
            .catch(e => console.log(e));
    }
}

module.exports = usuariosControllers;