import express from "express";

const host = "127.0.0.1";
const port = "3000";

const server = express();

server.get("/", (req, res) => {
    res.send("HOME");
});

server.listen(port, () => {
    console.log(`http://${host}:${port}`);
});
