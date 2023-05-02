const { Router } = require('express');
const { nuevoUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos')

const router = Router();


//CREAR UN NUEVO USUARIO
router.post('/new', [
    check( 'name' , 'El nombre es obligatorio').not().isEmpty(),
    check( 'email' , 'El email es obligatorio').isEmail(),
    check( 'password' , 'El password es obligatorio').isLength({min: 6}),
    validarCampos
] ,nuevoUsuario)

//LOGIN DE USUARIO
router.post('/', [
    check( 'email' , 'El email es obligatorio').isEmail(),
    check( 'password' , 'El password es obligatorio').isLength({min: 6}),
    validarCampos
],loginUsuario)

//VALIDAR Y REVALIDAR TOKEN
router.get('/renew',revalidarToken)

module.exports = router;