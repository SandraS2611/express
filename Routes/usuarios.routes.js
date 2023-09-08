const { Router } = require("express")
const {
    obtenerTodosLosUsuarios,
    obtenerUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
} = require("../controllers/usuarios.controllers")

const router = Router()

router.get("/", obtenerTodosLosUsuarios)
router.get("/:nombreDeUsuario", obtenerUsuarioPorId)
router.post("/", crearUsuario)

module.exports = router