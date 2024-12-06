// Controller Example
import { Request, Response } from 'express';
import { GroceryItem } from '../models/groceryItem';
import { errorResponse, successResponse } from '../utils/responseHandler';

export const addItem = async (req: Request, res: Response) => {
    try {
        const { name, price, quantity } = req.body;
        const newItem = await GroceryItem.create({ name, price, quantity });
        successResponse(res, 'Item added successfully', 200, newItem);
    } catch (err: any) {
        errorResponse(res, err.message, 500);
    }
};

export const deleteItem = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const item = await GroceryItem.findByPk(id);
        if (!item) {
            throw new Error('Item not found');
        }
        await item.destroy();
        successResponse(res, 'Item deleted successfully', 200, {});
    } catch (err: any) {
        errorResponse(res, err.message, 500);
    }
};

export const updateItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, price, quantity } = req.body;
        const item = await GroceryItem.findByPk(id);
        if (!item) {
            throw new Error('Item not found');
        }
        item.name = name || item.name;
        item.price = price || item.price;
        item.quantity = quantity || item.quantity;
        await item.save();
        successResponse(res, 'Item updated successfully', 200, item);
    } catch (err: any) {
        errorResponse(res, err.message, 500);
    }
};

