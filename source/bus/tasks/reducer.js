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

        case types.UPDATE_TASK:
            return state.map((task) =>
                task.get("id") === action.payload.id
                    ? fromJS(action.payload)
                    : task
            );

        case types.REMOVE_TASK:
            return state.filter((task) => task.get("id") !== action.payload);

        case types.TOGGLE_COMPLETE_TASK:
            return state.updateIn(
                [
                    state.findIndex(
                        (task) => task.get("id") === action.payload
                    ),
                    "completed"
                ],
                (value) => !value
            );

        case types.TOGGLE_FAVORITE_TASK:
            return state.updateIn(
                [
                    state.findIndex(
                        (task) => task.get("id") === action.payload
                    ),
                    "favorite"
                ],
                (value) => !value
            );

        case types.TOGGLE_FOCUS_TASK:
            return state.updateIn(
                [
                    state.findIndex(
                        (task) => task.get("id") === action.payload
                    ),
                    "focusTask"
                ],
                (value) => !value
            );

        case types.SORT_TASKS:
            return state.sort((a, b) => {
                if (a.get("favorite") === b.get("favorite")) {
                    if (a.get("completed") === b.get("completed")) {
                        return b
                            .get("created")
                            .toString()
                            .localeCompare(a.get("created").toString());
                    }

                    return a.get("completed") > b.get("completed") ? 1 : -1;
                }

                return b.get("favorite") > a.get("favorite") ? 1 : -1;
            });
        case types.SEARCH_TASKS:
            return state.filter(
                (task) => task.get("message").search(action.payload) !== -1
            );

        default:
            return state;
    }
};
