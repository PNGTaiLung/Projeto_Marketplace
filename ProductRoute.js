import ItemProd from "../model/ItemProd.js";

class ItemProductController{
    static async createItem(req, res){
        const { precoUnitario, quantidade, fkProduto, fkCarrinho } = req.body;

        if(!precoUnitario || !quantidade || !fkProduto || !fkCarrinho){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const createdItem = await ItemProd.create({ precoUnitario, quantidade, fkProduto, fkCarrinho });
        res.status(201).json(createdItem)
    }
}

export default ItemProductController

/*import { getAll } from "../model/ItemProd.js";

class ItemProductController{ 
    static listProduct(req, res){
        res.json(getAll())
    }
}

export default ItemProductController*/
