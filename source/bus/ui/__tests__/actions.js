// Actions
import { uiActions } from "../actions";

describe("ui actions:", () => {
    test("startSpinning", () => {
        expect(uiActions.startSpinning()).toMatchSnapshot();
    });

    test("stopSpinning", () => {
        expect(uiActions.stopSpinning()).toMatchSnapshot();
    });

    test("emitError", () => {
        expect(uiActions.emitError(__.error, __.meta)).toMatchSnapshot();
    });
});
