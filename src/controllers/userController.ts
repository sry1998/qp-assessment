import { Request, Response, } from "express";
import { GroceryItem } from '../models/groceryItem';
import { Order } from '../models/order';
import { OrderItems } from '../models/orderItems';
import { errorResponse, successResponse } from '../utils/responseHandler';

export const orderItems = async (req: Request, res: Response) => {
    try {
      const { userId, items } = req.body;
      const order = await Order.create({ userId });
      let totalPrice = 0;
      for (let item of items) {
        const groceryItem = await GroceryItem.findByPk(item.itemId);
        if (!groceryItem || groceryItem.quantity < item.quantity) {
          throw new Error('Out of stock');
        }
        const itemTotalPrice = groceryItem.price * item.quantity;
        totalPrice += itemTotalPrice;
        await OrderItems.create({
          orderId: order.id,
          groceryItem_Id: groceryItem.id,
          quantity: item.quantity,
        });
        groceryItem.quantity -= item.quantity;
        await groceryItem.save();
      }
      order.totalPrice = totalPrice || order.totalPrice;
      await order.save();
      const updatedOrder = await Order.findByPk(order.id, {
        include: [{ model: GroceryItem}]
      });
      successResponse(res, 'Success', 200, updatedOrder);
    } catch (err: any) {
        errorResponse(res, err, 500);
    }
};
