// Core
import { apply } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";

// Instruments
import { api } from "../../../REST/api";
import { uiActions } from "../../ui/actions";
import { tasksActions } from "../actions";
import { removeTask } from "../saga/workers";

describe("removeTask saga:", () => {
    test("should complete a 200 status response scenario", async () => {
        await expectSaga(removeTask, { payload: __.taskId })
            .put(uiActions.startSpinning())
            .provide([
                [apply(api, api.tasks.remove, [__.taskId]), __.fetchResponseSuccess204]
            ])
            .put(tasksActions.removeTask(__.taskId))
            .put(tasksActions.sortTasks())
            .put(uiActions.stopSpinning())
            .run();
    });

    test("should complete a 401 status response scenario", async () => {
        await expectSaga(removeTask, { payload: __.taskId })
            .put(uiActions.startSpinning())
            .provide([
                [apply(api, api.tasks.remove, [__.taskId]), __.fetchResponseFail401]
            ])
            .put(uiActions.emitError(__.error, "removeTask worker"))
            .put(uiActions.stopSpinning())
            .run();
    });
});
