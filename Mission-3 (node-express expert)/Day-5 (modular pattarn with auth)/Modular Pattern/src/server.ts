import express, { NextFunction, Request, Response } from "express";

import config from "./config";
import initDb from "./config/db";
import logger from "./middleware/logger";
import { userRoutes } from "./modules/user/user.routes";
import { todoRoutes } from "./modules/todo/todo.routes";
import { authRoutes } from "./modules/auth/auth.routes";


const app = express()

const port = config.port

// parser
app.use(express.json())    // this parses the json body data

initDb()


app.get('/', logger, (req:Request, res:Response) => {
  res.send("Hello world")
})



// ALL CRUD OPERATIONS FOR USERS
app.use('/users', userRoutes)


// ALL CRUD OPERATIONS FOR TODOS
app.use('/todos', todoRoutes)


// auth routes
app.use('/auth', authRoutes)



// not found route
app.use('/', logger, (req:Request, res:Response) => {
  res.status(404).json({
    success : false,
    message : "path not found!",
    path : req.path
  })
})





app.listen(port, () => {
  console.log(`The server is running on port ${port}`)
})
