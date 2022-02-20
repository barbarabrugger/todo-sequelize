import express from "express";
import * as Middleware from "../../middleware";
import * as TodoController from "../controller";
import * as TodoValidator from "../validators";

// eslint-disable-next-line new-cap
const router = express.Router();

router.post("/create", TodoValidator.checkCreateTodo(), Middleware.handleValidationError, TodoController.create);
router.get("/read", TodoValidator.checkReadTodo(), Middleware.handleValidationError, TodoController.readPagination);
router.get("/read/:id", TodoValidator.checkIdParam(), Middleware.handleValidationError, TodoController.readById);
router.put("/update/:id", TodoValidator.checkIdParam(), Middleware.handleValidationError, TodoController.updateById);
router.delete("/delete/:id", TodoValidator.checkIdParam(), Middleware.handleValidationError, TodoController.deleteById);

export default router;
