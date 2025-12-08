import { Request, Response } from "express";

import { userServices } from "./user.service";


// post/create a user
const createUser =  async (req:Request,res: Response) => {
  console.log(req.body);

  // const {name, email, password} = req.body;

  try {
    //  this is business logics which will be written to services file
    // const result = await pool.query(`INSERT INTO users(name,email) VALUES($1, $2) RETURNING *`, [name, email])

    const result = await userServices.createUserServie(req.body)

    console.log(result.rows[0]);

    res.status(201).json({
      success : true,
      message: "User created successfully",
      data : result.rows[0]
    })
  } 
  
  catch (error:any) {
    res.status(500).json({
      success: false,
      message : error
    })
  }
}




// get all users
const getUser =  async(req:Request, res:Response) => {

  try {
    // business logic for get all users
    const result = await userServices.getUserService()

    res.status(200).json({
      success : true,
      message : "user data retrived successfully",
      data : result.rows
    })

    
  } catch (error:any) {
      res.status(404).json({
      success : false,
      message: "failed at data retrive",
    })
  }
}




const getSingleUser =  async(req:Request, res:Response) => {

  try {

    // const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [req.params.id])

    const result = await userServices.getSingleUserService(req.params.id as string)

    if(result.rows.length === 0) {
      res.status(404).json({
        success : false,
        message : "User not found"
      })
    }
    else {
      res.status(200).json({
        success:true,
        message : "User fetched successfully",
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



const updateUser = async(req:Request,res:Response) => {

  try {
    const {name, email} = req.body;
    const id = req.params.id

    // const result = await pool.query(`UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *`, [name,email, req.params.id])

    const result = await userServices.updateUserService(name, email, id as string)

    if(result.rows.length === 0) {
      res.status(404).json({
        success : false,
        message : 'User not found to update'
      })
    } else {
        res.status(200).json({
        success : true,
        message : 'user updates successfully',
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


const deleteUser = async(req:Request, res:Response)=> {

  const id = req.params.id;

  try {
    // const result = await pool.query(`DELETE FROM users WHERE id = $1 RETURNING * `, [id])

    const result = await userServices.deleteUserService(id as string)

    if(result.rows.length === 0) {
        res.status(404).json({
        success : false,
        message : 'User not found to delete'
      })
    } else {
        res.status(200).json({
        success : true,
        message : 'user deleted successfully',
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







export const userControllers = {
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    deleteUser
}