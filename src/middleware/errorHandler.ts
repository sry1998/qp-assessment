import { Request, Response, NextFunction } from 'express';
import { errorResponse } from '../utils/responseHandler';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
    errorResponse(res, err.message || 'Internal Server Error', 500);
};