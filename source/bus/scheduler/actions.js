// Types
import { types } from "./types";

export const schedulerActions = {
    // Sync
    fillNewMessage: (message) => {
        return {
            type:    types.FILL_NEW_MESSAGE,
            payload: message,
        };
    },
    clearMessage: () => {
        return {
            type: types.CLEAR_MESSAGE,
        };
    },
};
