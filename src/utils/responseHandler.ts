import { Response } from "express";

export const successResponse = (res: Response, message: String, status = 200, data?: any) => {
    return res.status(status).json({
        message,
        status,
        data,
    });
}

export const errorResponse = (res: Response, errMessage: String, status = 500) => {
    return res.status(status).json({
        error: errMessage,
        status,
    });
}