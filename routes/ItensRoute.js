import express from 'express'
import ItemProductController from '../controller/ItemProductController.js'

const Router = express.Router();

Router.post("/", ItemProductController.createItem)

export default Router