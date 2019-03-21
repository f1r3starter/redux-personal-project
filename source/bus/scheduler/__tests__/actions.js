// Actions
import { schedulerActions } from "../actions";

// Types
import { types } from "../types";

describe("scheduler actions:", () => {
    test("fillNewMessage", () => {
        expect(schedulerActions.fillNewMessage(__.message)).toEqual({
            type:    types.FILL_NEW_MESSAGE,
            payload: __.message,
        });
    });

    test("clearMessage", () => {
        expect(schedulerActions.clearMessage()).toEqual({
            type: types.CLEAR_MESSAGE,
        });
    });
});
