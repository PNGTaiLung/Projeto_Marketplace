import express from 'express'
import UserController from '../controller/UserController.js'
import ProductController from '../controller/ProductContoller.js';
import CarrinhoController from '../controller/CarrinhoController.js';
import ItemProductController from '../controller/ItemProductController.js';

const Router = express.Router();
Router.get('/users', UserController.listUser);
Router.get('/products', ProductController.listProduct)
Router.get('/carrinho', CarrinhoController.listCarrinho)
Router.get('/itens', ItemProductController.listProduct)

export default Router