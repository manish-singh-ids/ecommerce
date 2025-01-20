import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Product extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })
    price: number;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    description: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    imageUrl: string;

    @Column({
        type: DataType.FLOAT,
        allowNull: true,
    })
    reviews: number;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    availabilityStatus: string;
}
