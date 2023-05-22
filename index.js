import express from 'express'
import UserRouter from './routes/UserRoute.js'
import CarrinhoRoute from './routes/CarrinhoRoute.js'
import ItensRoute from './routes/ItensRoute.js'
import ProductRoute from './routes/ProductRoute.js'
import db from './database.js'

await db.sync(console.log('Banco de dados OK'))

const app = express()

app.use(express.json())
app.use('/user', UserRouter)
app.use('/carrinho', CarrinhoRoute)
app.use('/item', ItensRoute)
app.use('/produto', ProductRoute)

const port = process.env.PORT || 8080

app.listen(port, () => {console.log('\nAPI ta online na porta ' + port + '!')})
