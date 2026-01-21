import express, { Application } from 'express';
import { postRouter } from './modules/post/post.router';
import { toNodeHandler } from "better-auth/node";
import { auth } from './lib/auth';
import cors from 'cors'

const app:Application = express()

app.use(cors({
    origin : process.env.APP_URL,
    credentials : true,    
    
}))


// this converts the codes into json format
app.use(express.json())




// for authentication
app.all("/api/auth/*splat", toNodeHandler(auth));




app.use('/posts', postRouter);









app.get('/', (req,res) => {
    res.send('hello from server')
})

export default app;