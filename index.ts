import express, { Request, Response, NextFunction } from 'express';
import { usersRouter } from './users/users.js';

const host = '127.0.0.1';
const port = '3000';

const app = express();

// app.use((req, res, next) => {
//     console.log("Time: ", Date.now());
//     next();
// });

app.get('/', (req, res) => {
    res.send('HOME');
});

app.use('/users', usersRouter);

app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
    res.send(err.message);
    next();
});

app.listen(port, () => {
    console.log(`http://${host}:${port}`);
});
