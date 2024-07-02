import { App } from './app.js';
import { LoggerService } from './logger/logger.service.js';
import { UserController } from './users/users.controller.js';
import { ExeptionFilter } from './errors/exeption.filters.js';

async function bootstrap() {
    const logger = new LoggerService();
    const userController = new UserController(logger);
    const exeptionFilter = new ExeptionFilter(logger);
    const app = new App(logger, userController, exeptionFilter);

    await app.init();
}

bootstrap();
