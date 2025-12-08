import { pool } from "../../config/db"

import bcrypt from "bcryptjs";


const createUserServie = async (payload: Record<string, unknown>) => {
    const {name, email, password, role} = payload;

    // hash password
    const hashedPassword = await bcrypt.hash(password as string, 10)


    const result = await pool.query(`INSERT INTO users(name,email,password, role) VALUES($1, $2, $3, $4) RETURNING *`, [name, email,hashedPassword, role])

    return result
}


const getUserService = async() => {
    const result = await pool.query(`SELECT * FROM users`)

    return result
}


const getSingleUserService = async(id:string) => {
    const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [id])

    return result
}


const updateUserService = async(name:string, email:string, id:string) => {
        const result = await pool.query(`UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *`, [name,email, id])

        return result
}


const deleteUserService = async(id:string) =>{
        const result = await pool.query(`DELETE FROM users WHERE id = $1 RETURNING * `, [id])

        return result
}


export const userServices = {
    createUserServie,
    getUserService,
    getSingleUserService,
    updateUserService,
    deleteUserService
}