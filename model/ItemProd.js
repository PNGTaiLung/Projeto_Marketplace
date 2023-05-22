import { Sequelize } from "sequelize";
import db from "../database.js"
import Product from "./Product.js"
import Carrinho from "./Carrinho.js";

const ItemProd = db.define('itemProd', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    precoUnitario: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}) 

export default ItemProd

//ItemProd
ItemProd.belongsTo(Product, {
    constraints: true,
    foreignKey: "fkProduto"
})

/*export class ItemProd{
    constructor(id_item, quantidade, id_prod, id_carrinho){
        this.id = id_item;
        this.quantidade = quantidade;
        this.id_prod = id_prod;
    }
}

export const getAll = () => {
    return dbItemProd;
}

export const dbItemProd = [
    new ItemProd(1, 4, 3),
    new ItemProd(2, 3, 2), 
    new ItemProd(3, 1, 3),
    new ItemProd(4, 4, 2),
    new ItemProd(5, 5, 3),
    new ItemProd(6, 6, 2),
    new ItemProd(7, 1, 1)
]*/