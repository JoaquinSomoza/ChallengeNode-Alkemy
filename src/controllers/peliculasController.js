const db = require('../database/models');
const { Op } = require("sequelize");

const peliculasController = {
    list: (req, res) => {
        db.Peliculas.findAll({
            attributes: ['id', 'imagen', 'titulo', 'fechaCreacion']
        })
            .then(pelicula => {
                return res.status(200).json({
                    meta: {
                        total: pelicula.length,
                        status: 200,
                        url: 'https://localhost:3000/movies'
                    },
                    data: pelicula,
                })
            })
            .catch(e => console.log(e))
    },
    detail: (req, res) => {
        let id = req.params.id;
        db.Peliculas.findByPk(id, {
            include: ['generos', 'personajes']
        })
            .then(pelicula => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        url: 'https://localhost:3000/movies/:id'
                    },
                    data: pelicula,
                })

            })
            .catch(e => console.log(e))
    },
    search: (req, res) => {
        let { titulo, fechaCreacion, genero } = req.query;
        db.Peliculas.findAll({
            include: ['generos'],
            where: {
                [Op.or]: [
                    { titulo: { [Op.like]: `%${titulo}%` } },
                    { fechaCreacion: { [Op.like]: `%${fechaCreacion}%` } },
                    { genero_id: { [Op.like]: `%${genero}%` } }
                ]
            },
            order: [['fechaCreacion', 'DESC' || 'ASC']],
        })
            .then(pelicula => {
                console.log(pelicula)
                return res.status(200).json({
                    data: pelicula,
                    status: 200,
                    url: 'https://localhost:3000/movies/search'
                })
            })
            .catch(e => console.log(e))
    },
    create: (req, res) => {
        db.Peliculas.create({
            imagen: req.body.imagen,
            titulo: req.body.titulo,
            fechaCreacion: req.body.fechaCreacion,
            calificacion: req.body.calificacion,
            genero_id: req.body.genero_id
        })
            .then(pelicula => {
                return res.status(200).json({
                    data: pelicula,
                    status: 200,
                    url: 'https://localhost:3000/movies/create'
                })
            })
            .catch(e => console.log(e))
    },
    edit: (req, res) => {
        db.Peliculas.update({
            imagen: req.body.imagen,
            titulo: req.body.titulo,
            fechaCreacion: req.body.fechaCreacion,
            calificacion: req.body.calificacion,
            genero_id: req.body.genero_id
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(pelicula => {
                return res.status(200).json({
                    data: pelicula,
                    status: 200,
                    url: 'https://localhost:3000/movies/edit/:id'
                })
            })
            .catch(e => console.log(e))
    },
    delete: (req, res) => {
        db.Peliculas.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(pelicula => {
                return res.status(200).json({
                    data: pelicula,
                    status: 200,
                    url: 'https://localhost:3000/movies/delete/:id'
                })
            })
            .catch(e => console.log(e))
    }



}


module.exports = peliculasController;