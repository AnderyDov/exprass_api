import { NextFunction, Request, Response } from 'express';

export interface IExeptionGilter {
    catch: (
        err: Error,
        req: Request,
        res: Response,
        next: NextFunction
    ) => void;
}
