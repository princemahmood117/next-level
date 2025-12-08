import express, { NextFunction, Request, Response } from "express";
import {Pool} from 'pg'
import dotenv from "dotenv"
import path from "path"

dotenv.config({path: path.join(process.cwd(), '.env')})

const app = express()
const port = 5000

// parser
app.use(express.json())    // this parses the json body data

// Database initialized
const pool = new Pool({
  connectionString : `${process.env.CONNECTION_STRING}`
})



const initDb = async () => {
  await pool.query(`CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT,
    phone VARCHAR(15),
    address TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
    
    )`)


    await pool.query(`CREATE TABLE IF NOT EXISTS todos(
      id SERIAL PRIMARY KEY,
      user_id INT REFERENCES users(id) ON DELETE CASCADE,
      title VARCHAR(200) NOT NULL,
      description TEXT,
      completed BOOLEAN DEFAULT false,
      due_date DATE,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()

      )`)
}

initDb()

// middleware
const logger = (req:Request, res:Response, next:NextFunction) => {

  console.log(`[${new Date().toISOString()}]  ${req.method}  ${req.path}\n`);
  next()
}

app.get('/', logger, (req:Request, res:Response) => {
  res.send("Hello world")
})



                        // CRUD OPERATIONS FOR USERS

// add user route
app.post('/users', async (req:Request,res: Response) => {
  console.log(req.body);

  const {name, email} = req.body;

  try {
    const result = await pool.query(`INSERT INTO users(name,email) VALUES($1, $2) RETURNING *`, [name, email])

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
})




// get all users
app.get('/users', async(req:Request, res:Response) => {

  try {
    const result = await pool.query(`SELECT * FROM users`)

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
})




// get a single user
app.get('/users/:id', async(req:Request, res:Response) => {

  try {

    const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [req.params.id])

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
})


// update(put)
app.put('/users/:id', async(req:Request,res:Response) => {

  try {
    const {name, email} = req.body;

    const result = await pool.query(`UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *`, [name,email, req.params.id])

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

})



// delete user
app.delete('/users/:id', async(req:Request, res:Response)=> {

  const id = req.params.id;

  try {
    const result = await pool.query(`DELETE FROM users WHERE id = $1 RETURNING * `, [id])

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

})









                        // CRUD OPERATIONS FOR TODOS


app.post('/todos', async(req:Request, res:Response) => {

  const {user_id, title, description} = req.body;

  try {
    const result = await pool.query(`INSERT INTO todos(user_id, title, description) VALUES($1, $2, $3) RETURNING *`,[user_id, title, description])

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
})


// get all todos
app.get('/todos', async(req:Request, res:Response) => {

  try {
    const result = await pool.query(`SELECT * FROM todos`)
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
})






// not found route
app.use('/', (req:Request, res:Response) => {
  res.status(404).json({
    success : false,
    message : "path not found!",
    path : req.path
  })
})





app.listen(port, () => {
  console.log(`The server is running on port ${port}`)
})
