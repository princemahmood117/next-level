import express from "express"
import cors from "cors"
import routes from "./routes"


const app = express()

app.use(cors())
app.use(express.json())


// version controlling facility
app.use('/api/v1', routes)









app.get('/', async (req,res) => {
    res.send('Hello World! My Express server is');
})

export default app
