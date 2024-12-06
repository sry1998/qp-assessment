// src/models/orderItems.ts
import { DataTypes, Model, Sequelize } from 'sequelize';
import sequelize from './index';
import { GroceryItem } from './groceryItem';
import { Order } from './order';

export class OrderItems extends Model {
    public id!: number;
    public orderId!: number;
    public groceryItem_Id!: number;
    public quantity!: number;
}


OrderItems.init(
    {
        orderId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Orders',
                key: 'id',
            },
        },
        groceryItem_Id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'GroceryItems',
                key: 'id',
            },
        },
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
    },
    {
        sequelize,
        tableName: 'OrderItems',
    }
);
