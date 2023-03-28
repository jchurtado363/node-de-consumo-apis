import { Router } from "express";
import { indexRoute } from '../controllers/indexControllers.js'

const router = Router()

router.get('/prueba', indexRoute)

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

export default router