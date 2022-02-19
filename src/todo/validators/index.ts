import {body,query, param} from "express-validator";

class TodoValidator {
    checkCreateTodo(){
        return [
            body("title").notEmpty().withMessage("The value should not be empty"),
            body("completed")
                .optional().isBoolean().withMessage("The value must be a boolean")
                .isIn([0,false]).withMessage("The value should be 0 or false")
        ];
    }

    checkReadTodo(){
        return [
            query("limit").notEmpty().withMessage("The query limit should not be empty")
                .isInt({min:1,max:10}).withMessage("The limit should be a number between 1 and 10"),
            query("offset").optional().isNumeric().withMessage("The query offset must be a number")
        ];
    }

    checkIdParam(){
        return [
            param("id").notEmpty().withMessage("The value should not be empty").isUUID(4).withMessage("The value should be UUID v4")
        ];
    }
}

export default new TodoValidator();