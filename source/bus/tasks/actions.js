// Types
import { types } from "./types";

export const tasksActions = {
    // Sync
    fillTasks: (tasks) => {
        return {
            type:    types.FILL_TASKS,
            payload: tasks,
        };
    },
    createTask: (task) => {
        return {
            type:    types.CREATE_TASK,
            payload: task,
        };
    },
    removeTask: (taskId) => {
        return {
            type:    types.REMOVE_TASK,
            payload: taskId,
        };
    },
    completeTask: (taskId) => {
        return {
            type:    types.COMPLETE_TASK,
            payload: taskId,
        };
    },
    uncompleteTask: (taskId) => {
        return {
            type:    types.UNCOMPLETE_TASK,
            payload: taskId,
        };
    },
    favoriteTask: (taskId) => {
        return {
            type:    types.FAVORITE_TASK,
            payload: taskId,
        };
    },
    unfavoriteTask: (taskId) => {
        return {
            type:    types.UNFAVORITE_TASK,
            payload: taskId,
        };
    },

    // Async
    fetchTasksAsync: () => {
        return {
            type: types.FETCH_TASKS_ASYNC,
        };
    },
    createTaskAsync: (task) => {
        return {
            type:    types.CREATE_TASK_ASYNC,
            payload: task,
        };
    },
    removeTaskAsync: (taskId) => {
        return {
            type:    types.REMOVE_TASK_ASYNC,
            payload: taskId,
        };
    },
    completeTaskAsync: (taskId) => {
        return {
            type:    types.COMPLETE_TASK_ASYNC,
            payload: taskId,
        };
    },
    uncompleteTaskAsync: (taskId) => {
        return {
            type:    types.UNCOMPLETE_TASK_ASYNC,
            payload: taskId,
        };
    },
    favoriteTaskAsync: (taskId) => {
        return {
            type:    types.FAVORITE_TASK_ASYNC,
            payload: taskId,
        };
    },
    unfavoriteTaskAsync: (taskId) => {
        return {
            type:    types.UNFAVORITE_TASK_ASYNC,
            payload: taskId,
        };
    },
};
