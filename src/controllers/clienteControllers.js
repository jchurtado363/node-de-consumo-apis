import { pool } from '../dbConect.js'

export const getClientes = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM cliente')

        res.json(rows)

    } catch (error) {
        return res.status(500).json({
            message: 'ALGO ANDA MAL'
        })
    }

}

export const getCliente = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM cliente where id=?', [req.params.id])

        if (result.length <= 0) return res.status(404).json({

            message: 'Cliente no encontrado'
        })

        res.json(result[0])

    } catch (error) {
        return res.status(500).json({
            message: 'ALGO ANDA MAL'
        })

    }
}

export const postCliente = async (req, res) => {
    try {
         const { name,apellido,n_ficha,n_documento } = req.body //configurar el body del json a enviar
        // // insertar los datos mediante JSON
         const [rows] = await pool.query('INSERT INTO cliente (name,apellido,n_ficha,n_documento) VALUES (?,?,?,?)', [name,apellido,n_ficha,n_documento])
        res.send({ // muestra los datos ingresados como resultado del envio JSON
            id: rows.insertId,
            name,apellido,n_ficha,n_documento

        })
        // res.send(name)
    } catch (error) {
        return res.status(500).json({
            message: 'ALGO ANDA MAL'
        })
    }
}

export const delCliente = async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM cliente WHERE idcliente=?',
            [req.params.idcliente])
        console.log(result)
        res.send('eliminado exitosamente')
    } catch (error) {
        return res.status(500).json({
            message: 'ALGO ANDA MAL'
        })
    }
}

export const UpdateCliente = async (req, res) => {
    try {
        const { id } = req.params
        const {     name,apellido,n_ficha,n_documento} = req.body
        const [result] = await pool.query('UPDATE cliente SET name = IFNULL(?, name),   apellido = IFNULL(?, apellido),n_documento = IFNULL(?, ,n_documento) ,n_ficha = IFNULL(?, ,n_ficha) WHERE id=?',
            [    name,apellido,n_ficha,n_documento, id])

        if (result.affectedRows === 0) return res.status(404).json({
            mensae: 'Cliente NO encontrado'
        })
        const [rows] = await pool.query('SELECT * FROM cliente WHERE id=?', [id])
        //res.json( rows[0])
        console.log(rows)
        res.json({ message: '! CAMBIO EXITOSO ¡' })

    } catch (error) {
        return res.status(500).json({
            message: ' ALGO ANDA MAL '
        })
    }
}







