import express from "express"
import cors from "cors"
import userRouter from "./module/user/user.route"

const app = express()

app.use(cors())
app.use(express.json())


app.use(userRouter)



app.get('/', async (req,res) => {
    res.send('Hello World! My Express server is');
})

export default app
