import expres from "express";

const usersRouter = expres.Router();

usersRouter.get("/login", (req, res) => {
    res.send("login");
});

usersRouter.get("/register", (req, res) => {
    res.send("register");
});

export { usersRouter };
