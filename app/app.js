import express from "express";
import { usersRouter } from "./users/users.js";

const host = "127.0.0.1";
const port = "3000";

const app = express();

// app.use((req, res, next) => {
//     console.log("Time: ", Date.now());
//     next();
// });

app.get("/", (_req, res) => {
    res.send("HOME");
});

app.use("/users", usersRouter);

app.use((_req, res) => {
    res.send("error");
});

app.listen(port, () => {
    console.log(`http://${host}:${port}`);
});
