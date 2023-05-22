import express from 'express'
import UserController from '../controller/UserController.js'

const Router = express.Router();

Router.get('/', UserController.list);
Router.get('/:id', UserController.getUserById);
Router.post('/', UserController.createUser);
Router.put('/:id', UserController.updateUser);
Router.delete('/:id', UserController.deleteUser);

export default Router