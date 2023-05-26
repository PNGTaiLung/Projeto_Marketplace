import Carrinho from "../model/Carrinho.js";
import Product from "../model/Product.js";

class CarrinhoController{
    static async listByUser(req, res){
        const id = parseInt(req.params.id);
        const compras = await Carrinho.findByPk(id, { include: Product });
        
        try{
            //res.json([ { "nome": compras.produtos.nome, "quantidade": compras.produtos.quantidade, "Preco Total": compras.precoTotal } ])
            res.json(compras.produtos)
        } catch (e){
            res.json("Não encontrado! Message: " + e.message)
        }
    }

    static async createCarrinho(req, res){
        const { precoTotal, fkUsuario } = req.body

        if(!precoTotal || !fkUsuario){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const dataCompra = Date.now()

        const createdCarrinho = await Carrinho.create({precoTotal, dataCompra, fkUsuario })
        res.status(201).json(createdCarrinho)
    }
}

export default CarrinhoController;