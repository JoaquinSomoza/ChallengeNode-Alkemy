const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const personajesController = {
    list: (req, res) => {
        db.Personajes.findAll({
            attributes: ['imagen', 'nombre']
        })
            .then(personaje => {
                return res.status(200).json({
                    meta: {
                        total: personaje.length,
                        status: 200,
                        url: 'https://localhost:3000/characters'
                    },
                    data: personaje
                })
            })
            .catch(e => console.log(e))
    },
    create: (req, res) => {
        db.Personajes.create({
            imagen: req.body.imagen,
            nombre: req.body.nombre,
            edad: req.body.edad,
            peso: req.body.peso,
            historia: req.body.historia,
            peliculas_id: req.body.peliculas_id
        })
            .then(personaje => {
                return res.status(200).json({
                    data: personaje,
                    status: 200,
                    url: 'https://localhost:3000/characters/create'
                })
                    .catch(e => console.log(e))
            })
    },
    edit: (req, res) => {
        db.Personajes.update({
            imagen: req.body.imagen,
            nombre: req.body.nombre,
            edad: req.body.edad,
            peso: req.body.peso,
            historia: req.body.historia,
            peliculas_id: req.body.peliculas_id
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(personaje => {
                return res.status(200).json({
                    data: personaje,
                    status: 200,
                    url: 'https://localhost:3000/characters/edit/:id'
                })
                    .catch(e => console.log(e))
            })
    },
    delete: (req, res) => {
        db.Personajes.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(personaje => {
                return res.status(200).json({
                    data: personaje,
                    status: 200,
                    url: 'https://localhost:3000/characters/delete/:id'
                })
                    .catch(e => console.log(e))
            })
    },
    detail: (req, res) => {
        let id = req.params.id;
        db.Personajes.findByPk(id, {
            include: ['peliculas']
        })
            .then(personaje => {
                return res.status(200).json({
                    data: personaje,
                    status: 200,
                    url: 'https://localhost:3000/characters/:id'
                })
            })
    },
    search: (req, res) => {
        let query = req.params.query;
        db.Personajes.findAll({
            include: ['peliculas'],
            where: {
                nombre: {
                    [Op.like]: '%' + query + '%'
                },
                edad: {
                    [Op.like]: '%' + query + '%'
                },
                peso: {
                    [Op.like]: '%' + query + '%'
                },
                peliculas: {
                    [Op.like]: '%' + query + '%'
                }
            }
        })
            .then(personaje => {
                return res.status(200).json({
                    meta: {
                        total: personaje.length,
                        status: 200,
                        url: "http://localhost:3000/characters/search?"
                    },
                    data: personaje,
                    pelicula: personaje.peliculas,
                })
            })
            .catch(e => console.log(e))
    }
}

module.exports = personajesController;