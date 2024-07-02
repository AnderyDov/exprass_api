import { NextFunction, Request, Response } from 'express';
import { BaseController } from '../common/base.controller.js';
import { LoggerService } from '../logger/logger.service.js';
import { HttpError } from '../errors/http-error.js';

export class UserController extends BaseController {
    constructor(logger: LoggerService) {
        super(logger);
        this.bindRouts([
            { path: '/register', method: 'post', func: this.register },
            { path: '/login', method: 'post', func: this.login },
        ]);
    }

    login(req: Request, res: Response, next: NextFunction) {
        next(new HttpError(401, 'ошибка авторизации'));
        // this.ok(res, 'login');
    }

    register(req: Request, res: Response, next: NextFunction) {
        // this.ok(res, 'register');
    }
}
