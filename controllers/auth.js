const response = require('express')
const { validationResult } = require('express-validator')

const nuevoUsuario = (req,res = response) =>{
    return res.json({
        ok: true,
        msg: 'Crear usuaurio new'
    })
}

const loginUsuario =  (req,res = response) =>{
    const errors = validationResult( req );
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }
    return res.json({
        ok: true,
        msg: 'Login de usuario'
    })
}

const revalidarToken =  (req, res = response) => {
    return res.json({
        ok: true, 
        msg: "Renew"
    })
}


module.exports = {
    nuevoUsuario,
    loginUsuario,
    revalidarToken
}