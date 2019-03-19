// Core
import { fromJS, List } from "immutable";

// Instruments
import { types } from "./types";

const initialState = List();

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_TASKS:
            return fromJS(action.payload);

        case types.CREATE_TASK:
            return state.unshift(fromJS(action.payload));

        case types.REMOVE_TASK:
            return state.filter((post) => post.get("id") !== action.payload);

        case types.COMPLETE_TASK:
            return state.setIn(
                [
                    state.findIndex((task) => {
                        return task.get("id") === action.payload.taskId;
                    }),
                    "completed"
                ],
                true
            );

        case types.UNCOMPLETE_TASK:
            return state.setIn(
                [
                    state.findIndex((task) => {
                        return task.get("id") === action.payload.taskId;
                    }),
                    "completed"
                ],
                false
            );

        case types.FAVORITE_TASK:
            return state.setIn(
                [
                    state.findIndex((task) => {
                        return task.get("id") === action.payload.taskId;
                    }),
                    "favorite"
                ],
                true
            );

        case types.UNFAVORITE_TASK:
            return state.setIn(
                [
                    state.findIndex((task) => {
                        return task.get("id") === action.payload.taskId;
                    }),
                    "favorite"
                ],
                true
            );

        default:
            return state;
    }
};
