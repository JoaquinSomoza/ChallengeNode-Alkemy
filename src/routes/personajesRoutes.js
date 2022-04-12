const express = require('express');
const router = express.Router();
const personajesController = require('../controllers/personajesController');

router.get('/', personajesController.list);
router.get('/detail/:id', personajesController.detail);
router.get('/edit/:id', personajesController.edit);
router.get('/search', personajesController.search);
router.post('/create', personajesController.create);
router.delete('/delete/:id', personajesController.delete);


module.exports = router;