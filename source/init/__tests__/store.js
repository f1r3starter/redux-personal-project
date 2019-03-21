// Core
import { createStore, combineReducers } from "redux";

// Reducers
import { tasksReducer as tasks } from "../../bus/tasks/reducer";
import { uiReducer as ui } from "../../bus/ui/reducer";
import { formsReducer as forms } from "../../bus/forms/reducer";
import { schedulerReducer as scheduler } from "../../bus/scheduler/reducer";

// Store
import { store } from "../store";

const referenceRootReducer = combineReducers({
    tasks,
    ui,
    forms,
    scheduler,
});

const referenceStore = createStore(referenceRootReducer);

describe("store:", () => {
    test("should have valid state shape:", () => {
        expect(store.getState()).toEqual(referenceStore.getState());
    });
});
