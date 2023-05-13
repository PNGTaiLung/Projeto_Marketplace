export class User{
    constructor(id_user, nome, email, senha, telefone){
        this.id = id_user;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.telefone = telefone;
    }
}

export const getAll = () => {
    return dbContatos;
}

export const dbContatos = [
    new User(1, "Aldo", "aldo@fatec.sp.gov.br", "123456789", "19-9999999"),
    new User(2, "Jose", "jose@fatec.sp.gov.br", "987654321", "19-0000000"),
    new User(3, "Wendel", "wendel@fatec.sp.gov.br", "123498765", "19-99990000")
]