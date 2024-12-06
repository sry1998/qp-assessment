import { Request, Response, } from "express";
import { GroceryItem } from "../models/groceryItem";
import { successResponse, errorResponse } from "../utils/responseHandler";

export const viewItems = async (req: Request, res: Response) => {
    try {
        const items = await GroceryItem.findAll();
        successResponse(res, 'Success', 200, items);
    } catch (err: any) {
        errorResponse(res, err.message, 500);
    }
};
