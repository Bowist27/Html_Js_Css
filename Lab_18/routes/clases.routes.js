const express = require('express');

const router = express.Router();
const isAuth = require('../util/is-auth');
const tropasController = require('../controllers/tropas.controller');
  
router.get('/crear', tropasController.get_crear);
router.post('/crear', tropasController.post_crear);
router.get('/:tropa_id', tropasController.get_root);
router.get('/', tropasController.get_root);

module.exports = router;