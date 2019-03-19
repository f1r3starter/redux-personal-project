// Core
import { combineForms } from "react-redux-form";

export const formsReducer = combineForms(
    {
        scheduler: {
            task: {
                newTask: "",
            },
        },
    },
    "forms"
);
