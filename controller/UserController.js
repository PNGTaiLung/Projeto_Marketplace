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
}

export default UserController;
