export class Product{
    constructor(id_produto, preco, nome, descricao, quantidade_prod){
        this.id = id_produto;
        this.preco = preco;
        this.nome = nome;
        this.descricao = descricao;
        this.quantidade = quantidade_prod;
    }    
}

export const getAll = () => {
    return dbProducts;
}

export const dbProducts = [
    new Product(1, 10.5, "Bolo de Murango", "Um bolo feito de morango", 7),
    new Product(2, 3, "Paçoca", "É um paffocann", 14),
    new Product(3, 4.23, "Brownie", "Um bolo diferenciado", 3)
]