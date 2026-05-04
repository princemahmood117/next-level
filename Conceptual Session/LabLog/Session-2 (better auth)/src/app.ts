import express from "express"
import cors from "cors"
import routes from "./routes"
import { toNodeHandler } from "better-auth/node"
import { auth } from "./lib/auth"
import dotenv from 'dotenv'
dotenv.config();


const app = express()

app.use(cors({
    origin: process.env.FRONTEND_PORT, // Replace with your frontend's origin
    // methods: ["GET", "POST", "PUT", "DELETE"], 
    credentials: true, 
  }))



app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json())


// version controlling facility
app.use('/api/v1', routes)









app.get('/', async (req,res) => {
    res.send('Hello World! My Express server is');
})

export default app
