// Reducer
import { schedulerReducer } from "../reducer";

// Actions
import { schedulerActions } from "../actions";
import { fromJS, Map } from "immutable";

describe("scheduler reducer:", () => {
    test("should return initial state by default:", () => {
        expect(schedulerReducer(void 0, {})).toMatchInlineSnapshot(`
Immutable.Map {
  "newMessageText": "",
}
`);
    });

    test("should handle FILL_NEW_MESSAGE action:", () => {
        expect(
            schedulerReducer(
                Map({ newMessageText: "" }),
                schedulerActions.fillNewMessage(__.message)
            )
        ).toMatchInlineSnapshot(`
Immutable.Map {
  "newMessageText": undefined,
}
`);
    });

    test("should handle CLEAR_MESSAGE action:", () => {
        expect(
            schedulerReducer(
                Map({ newMessageText: __.message }),
                schedulerActions.clearMessage()
            )
        ).toMatchInlineSnapshot(`
Immutable.Map {
  "newMessageText": "",
}
`);
    });
});
