import express from 'express'
import indexRoute from './routes/index.Rout.js'
import clienteRoutes from './routes/clienteRoutes.js';



const app = express()

app.use(express.json())


app.use('/appi',indexRoute)

app.use('/appi',clienteRoutes)


app.listen()
console.log('EL SERVIDOR ACTIVO EN PUERTO http://localhost:3000/appi/cliente')
export default app