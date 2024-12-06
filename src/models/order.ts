import { DataTypes, Model, Sequelize } from 'sequelize';
import sequelize from './index';
import { OrderItems } from './orderItems';
import { GroceryItem } from './groceryItem';

export class Order extends Model {
  public id!: number;
  public userId!: number;
  public totalPrice!: number;
  public status!: string;
}
Order.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Pending',
    },
  },
  {
    sequelize,
    tableName: 'Orders',
  }
);

(async () => {
  const { GroceryItem } = await import('./groceryItem');
  const { OrderItems } = await import('./orderItems');

  Order.belongsToMany(GroceryItem, {
    through: OrderItems,
    foreignKey: 'orderId',
  });
})();