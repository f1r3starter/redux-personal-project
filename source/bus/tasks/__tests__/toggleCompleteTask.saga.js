// Core
import { apply } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";

// Instruments
import { api } from "../../../REST/api";
import { uiActions } from "../../ui/actions";
import { tasksActions } from "../actions";
import { toggleCompleteTask } from "../saga/workers";

describe("toggleCompleteTask saga:", () => {
    test("should complete a 200 status response scenario", async () => {
        await expectSaga(toggleCompleteTask, { payload: __.task })
            .put(uiActions.startSpinning())
            .provide([
                [apply(api, api.tasks.update, [{ ...__.task, completed: !__.task.completed }]), __.fetchResponseSuccessUpdate]
            ])
            .put(tasksActions.toggleCompleteTask(__.taskId))
            .put(tasksActions.sortTasks())
            .put(uiActions.stopSpinning())
            .run();
    });

    test("should complete a 401 status response scenario", async () => {
        await expectSaga(toggleCompleteTask, { payload: __.task })
            .put(uiActions.startSpinning())
            .provide([
                [apply(api, api.tasks.update, [{ ...__.task, completed: !__.task.completed }]), __.fetchResponseFail401]
            ])
            .put(uiActions.emitError(__.error, "toggleCompleteTask worker"))
            .put(uiActions.stopSpinning())
            .run();
    });
});
