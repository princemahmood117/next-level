import express from "express"
import cors from "cors"

const app = express()

app.get('/', async (req,res) => {
    res.send('Hello World! My Express server is');
})

export default app
