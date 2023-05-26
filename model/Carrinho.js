import { Sequelize } from "sequelize";
import db from "../database.js"
import User from "./User.js"
import ItemProd from "./ItemProd.js";
import Product from "./Product.js";

const Carrinho = db.define('carrinho', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    precoTotal: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    dataCompra: {
        type: Sequelize.DATE,
        allowNull: false
    }
}) 

export default Carrinho

//ItemProd
ItemProd.belongsTo(Carrinho, {
    constraints: true,
    foreignKey: "fkCarrinho",
})

//Carrinho
Carrinho.hasMany(ItemProd, {
    foreignKey: "fkCarrinho"
})

Carrinho.belongsToMany(Product, {
    through: {
        model: ItemProd
    },
    foreignKey: 'fkCarrinho',
    constraint: true
})

//Produto
Product.belongsToMany(Carrinho, {
    through: {
        model: ItemProd
    },
    foreignKey: 'fkProduto',
    constraint: true
})