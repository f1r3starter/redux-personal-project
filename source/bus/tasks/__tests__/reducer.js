// Reducer
import { tasksReducer } from "../reducer";

// Actions
import { tasksActions } from "../actions";
import { fromJS } from "immutable";

describe("tasks reducer:", () => {
    test("should return initial state by default:", () => {
        expect(tasksReducer(void 0, {})).toMatchInlineSnapshot(
            `Immutable.List []`
        );
    });

    test("should handle FILL_TASKS action:", () => {
        expect(tasksReducer(fromJS(__.tasks), tasksActions.fillTasks(__.tasks)))
            .toMatchInlineSnapshot(`
Immutable.List [
  Immutable.Map {
    "completed": false,
    "created": "2019-03-21T22:02:32.687Z",
    "favorite": true,
    "id": "TEST_ID",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID2",
    "message": "New message",
  },
  Immutable.Map {
    "completed": true,
    "created": "2019-03-22T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID3",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID4",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": true,
    "id": "TEST_ID5",
    "message": "New message",
  },
]
`);
    });

    test("should handle CREATE_TASK action:", () => {
        expect(tasksReducer(fromJS(__.tasks), tasksActions.createTask(__.task)))
            .toMatchInlineSnapshot(`
Immutable.List [
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-21T22:02:32.687Z",
    "favorite": true,
    "id": "TEST_ID",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID2",
    "message": "New message",
  },
  Immutable.Map {
    "completed": true,
    "created": "2019-03-22T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID3",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID4",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": true,
    "id": "TEST_ID5",
    "message": "New message",
  },
]
`);
    });

    test("should handle UPDATE_TASK action:", () => {
        expect(tasksReducer(fromJS(__.tasks), tasksActions.updateTask(__.task)))
            .toMatchInlineSnapshot(`
Immutable.List [
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID2",
    "message": "New message",
  },
  Immutable.Map {
    "completed": true,
    "created": "2019-03-22T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID3",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID4",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": true,
    "id": "TEST_ID5",
    "message": "New message",
  },
]
`);
    });

    test("should handle REMOVE_TASK action:", () => {
        expect(
            tasksReducer(fromJS(__.tasks), tasksActions.removeTask(__.taskId))
        ).toMatchInlineSnapshot(`
Immutable.List [
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID2",
    "message": "New message",
  },
  Immutable.Map {
    "completed": true,
    "created": "2019-03-22T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID3",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID4",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": true,
    "id": "TEST_ID5",
    "message": "New message",
  },
]
`);
    });

    test("should handle TOGGLE_COMPLETE_TASK action:", () => {
        expect(
            tasksReducer(
                fromJS(__.tasks),
                tasksActions.toggleCompleteTask(__.taskId)
            )
        ).toMatchInlineSnapshot(`
Immutable.List [
  Immutable.Map {
    "completed": true,
    "created": "2019-03-21T22:02:32.687Z",
    "favorite": true,
    "id": "TEST_ID",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID2",
    "message": "New message",
  },
  Immutable.Map {
    "completed": true,
    "created": "2019-03-22T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID3",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID4",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": true,
    "id": "TEST_ID5",
    "message": "New message",
  },
]
`);
    });

    test("should handle TOGGLE_FAVORITE_TASK action:", () => {
        expect(
            tasksReducer(
                fromJS(__.tasks),
                tasksActions.toggleFavoriteTask(__.taskId)
            )
        ).toMatchInlineSnapshot(`
Immutable.List [
  Immutable.Map {
    "completed": false,
    "created": "2019-03-21T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID2",
    "message": "New message",
  },
  Immutable.Map {
    "completed": true,
    "created": "2019-03-22T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID3",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID4",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": true,
    "id": "TEST_ID5",
    "message": "New message",
  },
]
`);
    });

    test("should handle TOGGLE_FOCUS_TASK action:", () => {
        expect(
            tasksReducer(
                fromJS(__.tasks),
                tasksActions.toggleFocusTask(__.taskId)
            )
        ).toMatchInlineSnapshot(`
Immutable.List [
  Immutable.Map {
    "completed": false,
    "created": "2019-03-21T22:02:32.687Z",
    "favorite": true,
    "id": "TEST_ID",
    "message": "New message",
    "focusTask": true,
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID2",
    "message": "New message",
  },
  Immutable.Map {
    "completed": true,
    "created": "2019-03-22T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID3",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID4",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": true,
    "id": "TEST_ID5",
    "message": "New message",
  },
]
`);
    });

    test("should handle SORT_TASKS action:", () => {
        expect(tasksReducer(fromJS(__.tasks), tasksActions.sortTasks()))
            .toMatchInlineSnapshot(`
Immutable.List [
  Immutable.Map {
    "completed": false,
    "created": "2019-03-21T22:02:32.687Z",
    "favorite": true,
    "id": "TEST_ID",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": true,
    "id": "TEST_ID5",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID2",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID4",
    "message": "New message",
  },
  Immutable.Map {
    "completed": true,
    "created": "2019-03-22T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID3",
    "message": "New message",
  },
]
`);
    });

    test("should handle SEARCH_TASKS action:", () => {
        expect(
            tasksReducer(fromJS(__.tasks), tasksActions.searchTasks(__.message))
        ).toMatchInlineSnapshot(`
Immutable.List [
  Immutable.Map {
    "completed": false,
    "created": "2019-03-21T22:02:32.687Z",
    "favorite": true,
    "id": "TEST_ID",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID2",
    "message": "New message",
  },
  Immutable.Map {
    "completed": true,
    "created": "2019-03-22T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID3",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": false,
    "id": "TEST_ID4",
    "message": "New message",
  },
  Immutable.Map {
    "completed": false,
    "created": "2019-03-20T22:02:32.687Z",
    "favorite": true,
    "id": "TEST_ID5",
    "message": "New message",
  },
]
`);
    });
});
