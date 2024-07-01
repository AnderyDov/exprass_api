import { App } from './app.js';
import { LoggerService } from './logger/logger.service.js';

async function bootstrap() {
    const logger = new LoggerService();
    const app = new App(logger);

    await app.init();
}

bootstrap();
