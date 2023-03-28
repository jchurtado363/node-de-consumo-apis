import { Router } from "express";

import { delCliente, getCliente, getClientes, postCliente, UpdateCliente } from "../controllers/clienteControllers.js"

const router = Router()

router.get('/cliente', getClientes)

router.get('/cliente/:id', getCliente)

router.post('/cliente', postCliente)

router.patch('/cliente/:idclientes', UpdateCliente)

router.delete('/cliente/:idcliente', delCliente)

 
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});




export default router