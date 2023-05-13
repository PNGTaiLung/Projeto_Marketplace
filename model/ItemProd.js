export class ItemProd{
    constructor(id_item, quantidade, id_prod){
        this.id = id_item;
        this.quantidade = quantidade;
        this.id_prod = id_prod;
    }
}

export const getAll = () => {
    return dbItemProd;
}

export const dbItemProd = [
    new ItemProd(1, 4, 3),
    new ItemProd(2, 3, 2), 
    new ItemProd(3, 1, 3),
    new ItemProd(4, 4, 2),
    new ItemProd(5, 5, 3),
    new ItemProd(6, 6, 2),
    new ItemProd(7, 1, 1)
]