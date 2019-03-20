// Core
import { put, apply } from "redux-saga/effects";

// Instruments
import { api } from "../../../../REST/api";
import { tasksActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

export function* toggleFavoriteTask ({ payload: task }) {
    try {
        yield put(uiActions.startSpinning());

        const response = yield apply(api, api.tasks.update, [
            { ...task, favorite: !task.favorite }
        ]);
        const {
            data: [updatedTask],
            message,
        } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(tasksActions.toggleFavoriteTask(updatedTask.id));
    } catch (error) {
        yield put(uiActions.emitError(error, "toggleFavoriteTask worker"));
    } finally {
        yield put(tasksActions.sortTasks());
        yield put(uiActions.stopSpinning());
    }
}
