import User from "../model/User.js"

class UserController{
    static async list(req, res){
        const users = await User.findAll();
        res.json(users)
    }

    static async getUserById(req, res){
        const id = parseInt(req.params.id)
        const user = await User.findByPk(id)

        if(!user){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        
        res.json(user)
    }

    static async createUser(req, res){
        const {nome, email, telefone} = req.body
        
        if(!nome || !email || !telefone){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }
        
        const createdUser = await User.create({nome,email,telefone})

        res.status(201).json("Usuario de " + createdUser.nome + " cadastrado com sucesso!")
    }

    static async deleteUser(req, res){
        const id = parseInt(req.params.id);
        const user = await User.findByPk(id)

        if(!user){
            res.status(404).json({Error: "Usuário não encontrado!"})
            return
        }

        await User.destroy({where: {id: user.id}})
        res.json({message: "Usuário removido com sucesso"})
    }

    static async updateUser(req,res){
        const id = parseInt(req.params.id)
        const user = await User.findByPk(id)

        if(!user){
            res.status(404).json({error:"Usuário não encontrado"})
            return
        }
        
        const {nome, email, telefone} = req.body // req.body.nome, req.body.email ...
        if(!nome || !email || !telefone){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const updatedUser = await User.update({nome,email,telefone},{where: {id: contato.id}})
        res.json(updatedUser)
    }
}

export default UserController;

/*import { getAll } from "../model/User.js";

class UserController{
    static listUser(req, res){
        res.json(getAll())
    }
}

export default UserController*/