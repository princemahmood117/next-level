import { pool } from "../../config/db"



const createPostService = async(user_id:string, title:string, description:string) => {
       const result = await pool.query(`INSERT INTO todos(user_id, title, description) VALUES($1, $2, $3) RETURNING *`,[user_id, title, description])

       return result
}

const createGetAllTodosService = async() => {
    const result = await pool.query(`SELECT * FROM todos`)
    return result
}


const getSingleTodoService = async(id:string) => {
       const result = await pool.query(`SELECT * FROM todos WHERE id = $1`, [id])
       return result
}


const updateTodoService = async(user_id:string,title:string,description:string, id:string) => {
    const result = await pool.query(`UPDATE todos SET user_id=$1, title=$2, description=$3 WHERE id=$4 RETURNING *`, [user_id,title,description, id])

    return result
}


const deleteTodoService = async(id:string) => {
      const result = await pool.query(`DELETE FROM todos WHERE id = $1 RETURNING * `, [id])

      return result
} 

export const todoServices = {
    createPostService,
    createGetAllTodosService,
    getSingleTodoService,
    updateTodoService,
    deleteTodoService
}