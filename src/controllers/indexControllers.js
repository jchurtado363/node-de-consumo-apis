import {pool} from '../dbConect.js'

export const indexRoute  = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM ventasdb.cliente;')
    res.json(result)
};