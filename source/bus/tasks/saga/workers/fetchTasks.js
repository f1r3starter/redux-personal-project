// Core
import { put, apply } from "redux-saga/effects";

// Instruments
import { api } from "../../../../REST/api";
import { uiActions } from "../../../ui/actions";
import { tasksActions } from "../../actions";

export function* fetchTasks () {
    try {
        yield put(uiActions.startSpinning());

        const response = yield apply(api, api.tasks.fetch);
        const { data, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(tasksActions.fillTasks(data));
        yield put(tasksActions.sortTasks());
    } catch (error) {
        yield put(uiActions.emitError(error, "fillTasks worker"));
    } finally {
        yield put(uiActions.stopSpinning());
    }
}
