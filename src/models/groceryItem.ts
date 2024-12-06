// src/models/groceryItem.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from './index';
import { Order } from './order';
export class GroceryItem extends Model {
    public id!: number;
    public name!: string;
    public price!: number;
    public quantity!: number;
}

GroceryItem.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'GroceryItems',
    }
);

(async () => {
    const { GroceryItem } = await import('./groceryItem');
    const { Order } = await import('./order');
    
    GroceryItem.belongsToMany(Order, {
        through: 'OrderItems',
        foreignKey: 'groceryItem_Id',
    });
  })();