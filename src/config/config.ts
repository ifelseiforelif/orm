import { Sequelize } from "sequelize-typescript";
import { Books } from "../models/book-model";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "orm",
  models: [Books],
});
export default connection;
