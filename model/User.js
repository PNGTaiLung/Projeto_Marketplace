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

/*export class User{
    constructor(id_user, nome, email, senha, telefone){
        this.id = id_user;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.telefone = telefone;
    }
}

export const getAll = () => {
    return dbContatos;
}

export const createUser = (user) => {
    contato.id_user = dbContatos.length + 1
    
}

export const UpdateUser = (id, user) => {

}

export const dbContatos = [
    new User(1, "Aldo", "aldo@fatec.sp.gov.br", "123456789", "19-9999999"),
    new User(2, "Jose", "jose@fatec.sp.gov.br", "987654321", "19-0000000"),
    new User(3, "Wendel", "wendel@fatec.sp.gov.br", "123498765", "19-99990000")
]
*/