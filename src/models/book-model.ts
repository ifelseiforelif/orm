import {
  Model,
  Column,
  DataType,
  Table,
  PrimaryKey,
} from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "books",
})
export class Books extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;
}
