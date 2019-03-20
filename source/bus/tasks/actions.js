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
    updateTask: (task) => {
        return {
            type:    types.UPDATE_TASK,
            payload: task,
        };
    },
    removeTask: (taskId) => {
        return {
            type:    types.REMOVE_TASK,
            payload: taskId,
        };
    },
    toggleCompleteTask: (taskId) => {
        return {
            type:    types.TOGGLE_COMPLETE_TASK,
            payload: taskId,
        };
    },
    toggleFavoriteTask: (taskId) => {
        return {
            type:    types.TOGGLE_FAVORITE_TASK,
            payload: taskId,
        };
    },
    toggleFocusTask: (taskId) => {
        return {
            type:    types.TOGGLE_FOCUS_TASK,
            payload: taskId,
        };
    },
    sortTasks: () => {
        return {
            type: types.SORT_TASKS,
        };
    },
    searchTasks: (query) => {
        return {
            type:    types.SEARCH_TASKS,
            payload: query,
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
    updateTaskAsync: (task) => {
        return {
            type:    types.UPDATE_TASK_ASYNC,
            payload: task,
        };
    },
    removeTaskAsync: (taskId) => {
        return {
            type:    types.REMOVE_TASK_ASYNC,
            payload: taskId,
        };
    },
    toggleCompleteTaskAsync: (taskId) => {
        return {
            type:    types.TOGGLE_COMPLETE_TASK_ASYNC,
            payload: taskId,
        };
    },
    toggleFavoriteTaskAsync: (taskId) => {
        return {
            type:    types.TOGGLE_FAVORITE_TASK_ASYNC,
            payload: taskId,
        };
    },
};
