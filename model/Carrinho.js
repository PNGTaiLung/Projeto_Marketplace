export class Carrinho{
    constructor(id_compra, products, id_user){
        this.id = id_compra
        this.products = products;
        this.id_user = id_user;
    }
}
    
export const getAll = () => {
    return dbCarrinho;
}

export const dbCarrinho = [
    new Carrinho(1, [4, 7], 1),
    new Carrinho(2, [1, 2, 3], 2),
    new Carrinho(3, [5, 6], 3)
]