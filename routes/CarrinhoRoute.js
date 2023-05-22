import express from 'express'
import CarrinhoController from '../controller/CarrinhoController.js'

const Router = express.Router();

Router.get("/:id", CarrinhoController.listByUser)
Router.post("/", CarrinhoController.createCarrinho)

export default Router