// Core
import { takeEvery, all, call } from "redux-saga/effects";

// Types
import { types } from "../types";

// Workers
import {
    createTask,
    fetchTasks,
    toggleCompleteTask,
    toggleFavoriteTask,
    updateTask,
    removeTask
} from "./workers";

function* watchFetchTasks () {
    yield takeEvery(types.FETCH_TASKS_ASYNC, fetchTasks);
}

function* watchCreateTask () {
    yield takeEvery(types.CREATE_TASK_ASYNC, createTask);
}

function* watchToggleCompleteTask () {
    yield takeEvery(types.TOGGLE_COMPLETE_TASK_ASYNC, toggleCompleteTask);
}

function* watchToggleFavoriteTask () {
    yield takeEvery(types.TOGGLE_FAVORITE_TASK_ASYNC, toggleFavoriteTask);
}

function* watchUpdateTask () {
    yield takeEvery(types.UPDATE_TASK_ASYNC, updateTask);
}

function* watchRemoveTask () {
    yield takeEvery(types.REMOVE_TASK_ASYNC, removeTask);
}

export function* watchTasks () {
    yield all([
        call(watchFetchTasks),
        call(watchCreateTask),
        call(watchToggleCompleteTask),
        call(watchToggleFavoriteTask),
        call(watchUpdateTask),
        call(watchRemoveTask)
    ]);
}
