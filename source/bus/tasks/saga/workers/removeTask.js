// Core
import { put, apply } from "redux-saga/effects";

// Instruments
import { api } from "../../../../REST/api";
import { tasksActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

export function* removeTask ({ payload: id }) {
    try {
        yield put(uiActions.startSpinning());

        const response = yield apply(api, api.tasks.remove, [id]);

        if (response.status !== 204) {
            const { message } = yield apply(response, response.json);

            throw new Error(message);
        }

        yield put(tasksActions.removeTask(id));
        yield put(tasksActions.sortTasks());
    } catch (error) {
        yield put(uiActions.emitError(error, "removeTask worker"));
    } finally {
        yield put(uiActions.stopSpinning());
    }
}
