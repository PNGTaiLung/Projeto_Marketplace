import ProductController from "../controller/ProductContoller.js";
import express from "express";

const Router = express.Router();

Router.post("/", ProductController.createProduct)
Router.get("/", ProductController.list)

export default Router;