import { Sequelize } from "sequelize";

const db = new Sequelize(
    "database",
    "user",
    "passw",
    {
        dialect: "sqlite",
        storage: 'dbMarkePlace.sqlite'
    }
);

export default db;