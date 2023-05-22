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

/*import { getAll } from "../model/Carrinho.js";
import { dbProducts } from "../model/Product.js";
import { dbItemProd } from "../model/ItemProd.js";

 const dbcarrinhos = getAll()

dbcarrinhos.forEach(item => {
    for (let index = 0; index < item["products"].length; index++) {
        item["products"][index] = [dbProducts[dbItemProd[item["products"][index]-1]["id_prod"]-1]['nome'], dbItemProd[item["products"][index]-1]["quantidade"]]
    }
});

class CarrinhoController{ 
    static listCarrinho(req, res){   
        res.json(dbcarrinhos)
    }    
}

export default CarrinhoController*/