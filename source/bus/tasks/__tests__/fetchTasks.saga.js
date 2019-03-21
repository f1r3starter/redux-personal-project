// Core
import { apply } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";

// Instruments
import { api } from "../../../REST/api";
import { uiActions } from "../../ui/actions";
import { tasksActions } from "../actions";
import { fetchTasks } from "../saga/workers";

describe("fetchTasks saga:", () => {
    test("should complete a 200 status response scenario", async () => {
        await expectSaga(fetchTasks)
            .put(uiActions.startSpinning())
            .provide([
                [apply(api, api.tasks.fetch), __.fetchResponseListSuccess]
            ])
            .put(tasksActions.fillTasks(__.tasks))
            .put(tasksActions.sortTasks())
            .put(uiActions.stopSpinning())
            .run();
    });

    test("should complete a 401 status response scenario", async () => {
        await expectSaga(fetchTasks)
            .put(uiActions.startSpinning())
            .provide([
                [apply(api, api.tasks.fetch), __.fetchResponseFail401]
            ])
            .put(uiActions.emitError(__.error, "fillTasks worker"))
            .put(uiActions.stopSpinning())
            .run();
    });
});
