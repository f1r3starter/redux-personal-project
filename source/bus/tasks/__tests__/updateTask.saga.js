// Core
import { apply } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";

// Instruments
import { api } from "../../../REST/api";
import { uiActions } from "../../ui/actions";
import { tasksActions } from "../actions";
import { updateTask } from "../saga/workers";

describe("updateTask saga:", () => {
    test("should complete a 200 status response scenario", async () => {
        await expectSaga(updateTask, { payload: __.task })
            .put(uiActions.startSpinning())
            .provide([
                [apply(api, api.tasks.update, [__.task]), __.fetchResponseSuccessUpdate]
            ])
            .put(tasksActions.updateTask(__.task))
            .put(tasksActions.sortTasks())
            .put(uiActions.stopSpinning())
            .run();
    });

    test("should complete a 401 status response scenario", async () => {
        await expectSaga(updateTask, { payload: __.task })
            .put(uiActions.startSpinning())
            .provide([
                [apply(api, api.tasks.update, [__.task]), __.fetchResponseFail401]
            ])
            .put(uiActions.emitError(__.error, "updateTask worker"))
            .put(uiActions.stopSpinning())
            .run();
    });
});
