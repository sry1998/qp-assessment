module.exports = {
  up: async (queryInterface:any, Sequelize:any) => {
    await queryInterface.createTable('OrderItems', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Orders', // Table name for Order model
          key: 'id',
        },
        onDelete: 'CASCADE', // Deletes associated items if the order is deleted
        onUpdate: 'CASCADE',
      },
      groceryItem_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'GroceryItems', // Table name for GroceryItem model
          key: 'id',
        },
        onDelete: 'CASCADE', // Deletes associated items if the grocery item is deleted
        onUpdate: 'CASCADE',
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface:any, Sequelize:any) => {
    await queryInterface.dropTable('OrderItems');
  },
};