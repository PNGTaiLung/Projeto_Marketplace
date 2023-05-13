import { getAll } from "../model/ItemProd.js";

class ItemProductController{ 
    static listProduct(req, res){
        res.json(getAll())
    }
}

export default ItemProductController