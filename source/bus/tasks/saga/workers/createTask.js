// Core
import { put, apply } from "redux-saga/effects";
import { actions } from "react-redux-form";

// Instruments
import { api } from "../../../../REST/api";
import { tasksActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

export function* createTask ({ payload: newTask }) {
    try {
        yield put(uiActions.startSpinning());

        const response = yield apply(api, api.tasks.create, [newTask]);
        const { data, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(tasksActions.createTask(data));
        yield put(actions.reset("forms.scheduler.task.newTask"));
        yield put(tasksActions.sortTasks());
    } catch (error) {
        yield put(uiActions.emitError(error, "createTask worker"));
    } finally {
        yield put(uiActions.stopSpinning());
    }
}
