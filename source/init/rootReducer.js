// Core
import { combineReducers } from "redux";

// Reducers
import { tasksReducer as tasks } from "../bus/tasks/reducer";
import { uiReducer as ui } from "../bus/ui/reducer";
import { formsReducer as forms } from "../bus/forms/reducer";
import { schedulerReducer as scheduler } from "../bus/scheduler/reducer";

export const rootReducer = combineReducers({
    tasks,
    ui,
    forms,
    scheduler,
});
