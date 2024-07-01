import express, { Express } from 'express';
import { usersRouter } from './users/users.js';
import { Server } from 'http';
import { ILogger } from './logger/logger.interface.js';

export class App {
    port: number;
    app: Express;
    server: Server;
    logger: ILogger;

    constructor(logger: ILogger) {
        this.port = 8000;
        this.app = express();
        this.logger = logger;
    }

    useRouter() {
        this.app.use('/users', usersRouter);
    }

    public async init() {
        this.useRouter();
        this.server = this.app.listen(this.port, () => {
            this.logger.log(`http://localhost:${this.port}`);
        });
    }
}
