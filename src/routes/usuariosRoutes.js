const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.post('/login', usuariosController.login);
router.post('/register', usuariosController.register);
//revisar!

module.exports = router;