import express from "express";
import controller from "../controllers/UsersController";

const router = express.Router();

const { create, update, view, index, remove } = new controller();

router.get("/", index);
// router.post("/", create);
// router.get("/:id", view);
// router.put("/:id", update);
// router.delete("/:id", remove);

export default router;
