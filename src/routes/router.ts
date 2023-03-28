import Router from "express";
import UserHandler from "../handlers/userHandler";

const router = Router();
const user = new UserHandler();

router.get("/users", user.get.bind(user));
router.post("/users", user.create.bind(user));

export { router };
