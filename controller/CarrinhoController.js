import { getAll } from "../model/Carrinho.js";
import { dbProducts } from "../model/Product.js";
import { dbItemProd } from "../model/ItemProd.js";

getAll().forEach(item => {
    console.log(item["products"])
    for (let index = 0; index < item["products"].length; index++) {
        item["products"][index] = [dbProducts[dbItemProd[item["products"][index]-1]["id_prod"]-1]['nome'], dbItemProd[item["products"][index]-1]["quantidade"]]
    }
});

class CarrinhoController{ 
    static listCarrinho(req, res){   
        res.json(getAll())
    }    
}



export default CarrinhoController