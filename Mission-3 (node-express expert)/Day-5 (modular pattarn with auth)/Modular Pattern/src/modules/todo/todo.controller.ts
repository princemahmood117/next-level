import { Request, Response } from "express";
import { todoServices } from "./todo.service";


const createTodo = async(req:Request, res:Response) => {

  const {user_id, title, description} = req.body;

  try {
    // const result = await pool.query(`INSERT INTO todos(user_id, title, description) VALUES($1, $2, $3) RETURNING *`,[user_id, title, description])

    const result = await todoServices.createPostService(user_id, title, description)

    res.status(201).json({
      success : true,
      message : "Todo created successfully",
      data : result.rows[0]
    })


  } catch (error:any) {
    res.status(400).json({
    success : false,
    message: "failed to create todo",
    })
  }
}


const getAlltodos =  async(req:Request, res:Response) => {

  try {
    // const result = await pool.query(`SELECT * FROM todos`)
    const result = await todoServices.createGetAllTodosService()

    res.status(200).json({
      success : true,
      message : "all todos fetched successfully",
      data : result.rows

    })

  } catch (error) {
    res.status(404).json({
    success : false,
    message: "failed to fetch todos",
    })
  }
}


const getSinleTodo = async(req:Request, res:Response) => {

  try {
    // const result = await pool.query(`SELECT * FROM todos WHERE id = $1`, [req.params.id])

    const id = req.params.id;
    const result = await todoServices.getSingleTodoService(id as string)

    if(result.rows.length === 0) {
      res.status(404).json({
        success : false,
        message : "single todo not found"
      })
    }
    else {
      res.status(200).json({
        success:true,
        message : "single todo fetched successfully",
        data : result.rows[0]
      })
    }
    
  } catch (error:any) {
      res.status(500).json({
      success : false,
      message: "failed at single data retrive",
    })
  }
}


const updateTodo = async(req:Request,res:Response) => {

  try {
    const {user_id, title, description} = req.body;
    const id = req.params.id

    // const result = await pool.query(`UPDATE todos SET user_id=$1, title=$2, description=$3 WHERE id=$4 RETURNING *`, [user_id,title,description, req.params.id])

    const result = await todoServices.updateTodoService(user_id, title, description, id as string)

    if(result.rows.length === 0) {
      res.status(404).json({
        success : false,
        message : 'todos not found to update'
      })
    } else {
        res.status(200).json({
        success : true,
        message : 'todos updates successfully',
        data : result
      })
    }
    

  } catch (error) {
    res.status(404).json({
    success : false,
    message: "failed at single data retrive to update",
    })
  }

}


const deleteTodo = async(req:Request, res:Response)=> {

  const id = req.params.id;

  try {
    // const result = await pool.query(`DELETE FROM todos WHERE id = $1 RETURNING * `, [id])

    const result = await todoServices.deleteTodoService(id as string)

    if(result.rows.length === 0) {
        res.status(404).json({
        success : false,
        message : 'Todo not found to delete'
      })
    } else {
        res.status(200).json({
        success : true,
        message : 'todo deleted successfully',
        data : result.rows
      })
    }
    
  } catch (error) {
    res.status(404).json({
    success : false,
    message: "failed at single user retrive to delete",
    })
  }

}

export const todoControllers = {
    createTodo,
    getAlltodos,
    getSinleTodo,
    updateTodo,
    deleteTodo
    
}