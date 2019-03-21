// Core
import { apply } from "redux-saga/effects";
import { actions } from "react-redux-form";
import { expectSaga } from "redux-saga-test-plan";

// Instruments
import { api } from "../../../REST/api";
import { uiActions } from "../../ui/actions";
import { tasksActions } from "../actions";
import { createTask } from "../saga/workers";

describe("createTask saga:", () => {
    test("should complete a 200 status response scenario", async () => {
        await expectSaga(createTask, __.newTask)
            .put(uiActions.startSpinning())
            .provide([
                [apply(api, api.tasks.create, __.newTask), __.fetchResponseSuccess]
            ])
            .put(tasksActions.createTask(__.task))
            .put(actions.reset("forms.scheduler.task.newTask"))
            .put(tasksActions.sortTasks())
            .put(uiActions.stopSpinning())
            .run();
    });

    test("should complete a 401 status response scenario", async () => {
        await expectSaga(createTask, __.newTask)
            .put(uiActions.startSpinning())
            .provide([
                [apply(api, api.tasks.create, __.newTask), __.fetchResponseFail401]
            ])
            .put(uiActions.emitError(__.error, "createTask worker"))
            .put(tasksActions.sortTasks())
            .put(uiActions.stopSpinning())
            .run();
    });
});
