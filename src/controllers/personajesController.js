const db = require('../database/models');
const sequelize = db.sequelize;
const { Op, Association } = require("sequelize");
const { query } = require('express');

const personajesController = {
    list: (req, res) => {
        db.Personajes.findAll({
            attributes: ['id', 'imagen', 'nombre', 'edad', 'peso', 'historia'],
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
            attributes: ['id', 'imagen', 'nombre', 'edad', 'peso', 'historia'],
            /* include: [{ association: 'peliculas' }], */
        })
            .then(personaje => {
                return res.status(200).json({
                    data: personaje,
                    status: 200,
                    url: 'https://localhost:3000/characters/detail/:id'
                })
                    .catch(e => console.log(e))
            })
    },
    search: (req, res) => {
        let { nombre, peso, edad } = req.query;
        db.Personajes.findAll({
            where: {
                [Op.or]: [
                    { nombre: { [Op.like]: `%${nombre}%` } },
                    { edad: { [Op.like]: `%${edad}%` } },
                    { peso: { [Op.like]: `%${peso}%` } },
                ]
            },
            attributes: ['nombre', 'edad', 'peso'],

        })
            .then(personaje => {
                console.log(personaje)
                return res.status(200).json({
                    data: personaje,
                    status: 200,
                    url: 'https://localhost:3000/characters/search',
                })
                    .catch(e => console.log(e))
            })
    }
}

module.exports = personajesController;