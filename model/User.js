import { Sequelize } from "sequelize";
import db from "../database.js"
import Carrinho from "./Carrinho.js";
import Product from "./Product.js";

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idVendor: {
        type: Sequelize.STRING,
        allowNull: true
    },
}) 

export default User

//User
User.hasMany(Carrinho, {
    foreignKey: "fkUsuario"
})

//Product
Product.belongsTo(User, {
    constraints: true,
    foreignKey: "fkProdutor"
})

//Carrinho
Carrinho.belongsTo(User, {
    constraints: true,
    foreignKey: "fkUsuario"
})
