// Core
import { put, apply } from "redux-saga/effects";

// Instruments
import { api } from "../../../../REST/api";
import { tasksActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

export function* toggleCompleteTask ({ payload: task }) {
    try {
        yield put(uiActions.startSpinning());

        const response = yield apply(api, api.tasks.update, [
            { ...task, completed: !task.completed }
        ]);
        const {
            data: [updatedTask],
            message,
        } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(tasksActions.toggleCompleteTask(updatedTask.id));
    } catch (error) {
        yield put(uiActions.emitError(error, "toggleCompleteTask worker"));
    } finally {
        yield put(tasksActions.sortTasks());
        yield put(uiActions.stopSpinning());
    }
}
