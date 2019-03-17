// Reducer
import { uiReducer } from "../reducer";

// Actions
import { uiActions } from "../actions";

describe("ui reducer:", () => {
  test("should return initial state by default:", () => {
    expect(uiReducer(void 0, {})).toMatchInlineSnapshot(`
Immutable.Map {
  "isSpinning": false,
}
`);
  });

  test("should handle START_SPINNING action:", () => {
    expect(uiReducer(void 0, uiActions.startSpinning())).toMatchInlineSnapshot(`
Immutable.Map {
  "isSpinning": true,
}
`);
  });

  test("should handle STOP_SPINNING action:", () => {
    expect(uiReducer(void 0, uiActions.stopSpinning())).toMatchInlineSnapshot(`
Immutable.Map {
  "isSpinning": false,
}
`);
  });
});
