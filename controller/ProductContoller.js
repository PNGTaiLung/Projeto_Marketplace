import Product from "../model/Product.js";

class ProductController{
    static async createProduct(req, res){
        const {nome, descricao, quantidade, preco, fkProdutor} = req.body 
        
        if(!nome || !descricao || !quantidade || !preco || !fkProdutor){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }
        
        const createdProduct = await Product.create({ nome, descricao, quantidade, preco, fkProdutor })
        res.status(201).json(createdProduct)
    }

}

export default ProductController;
