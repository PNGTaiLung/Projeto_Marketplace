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

/*export class Carrinho{
    constructor(id_compra, products, id_user){
        this.id = id_compra
        this.products = products;
        this.id_user = id_user;
    }
}

export const getAll = () => {
    return dbCarrinho;
}

export const dbCarrinho = [
    new Carrinho(1, [4, 7], 1),
    new Carrinho(2, [1, 2, 3], 2),
    new Carrinho(3, [5, 6], 3)
]*/