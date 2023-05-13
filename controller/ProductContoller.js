import { getAll } from "../model/Product.js";

class ProductController{ 
    static listProduct(req, res){
        res.json(getAll())
    }
}

export default ProductController