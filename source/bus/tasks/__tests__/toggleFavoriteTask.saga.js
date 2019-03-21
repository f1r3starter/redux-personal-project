// Core
import { apply } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";

// Instruments
import { api } from "../../../REST/api";
import { uiActions } from "../../ui/actions";
import { tasksActions } from "../actions";
import { toggleFavoriteTask } from "../saga/workers";

describe("toggleFavoriteTask saga:", () => {
    test("should complete a 200 status response scenario", async () => {
        await expectSaga(toggleFavoriteTask, { payload: __.task })
            .put(uiActions.startSpinning())
            .provide([
                [
                    apply(api, api.tasks.update, [
                        { ...__.task, favorite: !__.task.favorite }
                    ]),
                    __.fetchResponseSuccessUpdate
                ]
            ])
            .put(tasksActions.toggleFavoriteTask(__.taskId))
            .put(tasksActions.sortTasks())
            .put(uiActions.stopSpinning())
            .run();
    });

    test("should complete a 401 status response scenario", async () => {
        await expectSaga(toggleFavoriteTask, { payload: __.task })
            .put(uiActions.startSpinning())
            .provide([
                [
                    apply(api, api.tasks.update, [
                        { ...__.task, favorite: !__.task.favorite }
                    ]),
                    __.fetchResponseFail401
                ]
            ])
            .put(uiActions.emitError(__.error, "toggleFavoriteTask worker"))
            .put(uiActions.stopSpinning())
            .run();
    });
});
