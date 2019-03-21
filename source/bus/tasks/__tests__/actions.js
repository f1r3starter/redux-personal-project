// Actions
import { tasksActions } from "../actions";

// Types
import { types } from "../types";

describe("tasks actions:", () => {
    test("fillTasks", () => {
        expect(tasksActions.fillTasks(__.tasks)).toEqual({
            type:    types.FILL_TASKS,
            payload: __.tasks,
        });
    });

    test("createTask", () => {
        expect(tasksActions.createTask(__.task)).toEqual({
            type:    types.CREATE_TASK,
            payload: __.task,
        });
    });

    test("updateTask", () => {
        expect(tasksActions.updateTask(__.task)).toEqual({
            type:    types.UPDATE_TASK,
            payload: __.task,
        });
    });

    test("removeTask", () => {
        expect(tasksActions.removeTask(__.taskId)).toEqual({
            type:    types.REMOVE_TASK,
            payload: __.taskId,
        });
    });

    test("toggleCompleteTask", () => {
        expect(tasksActions.toggleCompleteTask(__.taskId)).toEqual({
            type:    types.TOGGLE_COMPLETE_TASK,
            payload: __.taskId,
        });
    });

    test("toggleFavoriteTask", () => {
        expect(tasksActions.toggleFavoriteTask(__.taskId)).toEqual({
            type:    types.TOGGLE_FAVORITE_TASK,
            payload: __.taskId,
        });
    });

    test("toggleFocusTask", () => {
        expect(tasksActions.toggleFocusTask(__.taskId)).toEqual({
            type:    types.TOGGLE_FOCUS_TASK,
            payload: __.taskId,
        });
    });

    test("sortTasks", () => {
        expect(tasksActions.sortTasks()).toEqual({
            type: types.SORT_TASKS,
        });
    });

    test("searchTasks", () => {
        expect(tasksActions.searchTasks(__.message)).toEqual({
            type:    types.SEARCH_TASKS,
            payload: __.message,
        });
    });

    test("fetchTasksAsync", () => {
        expect(tasksActions.fetchTasksAsync()).toEqual({
            type: types.FETCH_TASKS_ASYNC,
        });
    });

    test("createTaskAsync", () => {
        expect(tasksActions.createTaskAsync(__.task)).toEqual({
            type:    types.CREATE_TASK_ASYNC,
            payload: __.task,
        });
    });

    test("updateTaskAsync", () => {
        expect(tasksActions.updateTaskAsync(__.task)).toEqual({
            type:    types.UPDATE_TASK_ASYNC,
            payload: __.task,
        });
    });

    test("removeTaskAsync", () => {
        expect(tasksActions.removeTaskAsync(__.taskId)).toEqual({
            type:    types.REMOVE_TASK_ASYNC,
            payload: __.taskId,
        });
    });

    test("toggleCompleteTaskAsync", () => {
        expect(tasksActions.toggleCompleteTaskAsync(__.taskId)).toEqual({
            type:    types.TOGGLE_COMPLETE_TASK_ASYNC,
            payload: __.taskId,
        });
    });

    test("toggleFavoriteTaskAsync", () => {
        expect(tasksActions.toggleFavoriteTaskAsync(__.taskId)).toEqual({
            type:    types.TOGGLE_FAVORITE_TASK_ASYNC,
            payload: __.taskId,
        });
    });
});
