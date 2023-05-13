import express from 'express'
import UserRouter from './routes/UserRoutes.js'

const app = express()

app.use(express.json())

app.use('/', UserRouter)
app.listen(8080, () => {console.log('API ta online!')})
