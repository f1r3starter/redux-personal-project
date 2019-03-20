// Core
import { Map } from "immutable";

// Instruments
import { types } from "./types";

const initialState = Map({
    newMessageText: "",
});

export const schedulerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_NEW_MESSAGE:
            return state.set("newMessageText", action.payload);
        case types.CLEAR_MESSAGE:
            return state.set("newMessageText", "");

        default:
            return state;
    }
};
