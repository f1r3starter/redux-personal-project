// Core
import { fromJS, List } from "immutable";

// Instruments
import { types } from "./types";

const initialState = List();

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_TODOS:
            return fromJS(action.payload);

        case types.CREATE_TODO:
            return state.unshift(fromJS(action.payload));

        case types.REMOVE_TODO:
            return state.filter((post) => post.get("id") !== action.payload);

        case types.COMPLETE_TODO:
            return state.setIn(
                [
                    state.findIndex((todo) => {
                        return todo.get("id") === action.payload.todoId;
                    }),
                    "completed"
                ],
                true
            );

        case types.UNCOMPLETE_TODO:
            return state.setIn(
                [
                    state.findIndex((todo) => {
                        return todo.get("id") === action.payload.todoId;
                    }),
                    "completed"
                ],
                false
            );

        case types.FAVOURITE_TODO:
            return state.setIn(
                [
                    state.findIndex((todo) => {
                        return todo.get("id") === action.payload.todoId;
                    }),
                    "favorite"
                ],
                true
            );

        case types.UNFAVOURITE_TODO:
            return state.setIn(
                [
                    state.findIndex((todo) => {
                        return todo.get("id") === action.payload.todoId;
                    }),
                    "favorite"
                ],
                true
            );

        default:
            return state;
    }
};
