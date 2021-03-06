/* Setup files module.
**
** This module will be executed before each test.
**
** This module contains a code to configure or set up the
** testing environment before each test. Since every test
** runs in its own environment, these scripts will be
** executed in the testing environment immediately before
** executing the test code itself.
**
** This module excutes before setupFramework module.
**
*/

import { LocalStorage } from './mocks/localStorage';
import { fetch } from './mocks/fetch';

const successMessage = 'TEST_SUCCESS_MESSAGE.';
const errorMessage = 'TEST_ERROR_MESSAGE.';
const token = 'TEST_TOKEN';
const error = new Error(errorMessage);

const meta = '123';

const message = 'New message';

const newTask = {
    message,
};

const taskId = "TEST_ID";

const task = {
    completed: false,
    created:   "2019-03-20T22:02:32.687Z",
    favorite:  false,
    id:        taskId,
    message,
};

const tasks = [
    {
        completed: false,
        created:   "2019-03-21T22:02:32.687Z",
        favorite:  true,
        id:        taskId,
        message,
    },
    {
        completed: false,
        created:   "2019-03-20T22:02:32.687Z",
        favorite:  false,
        id:        "TEST_ID2",
        message,
    },
    {
        completed: true,
        created:   "2019-03-22T22:02:32.687Z",
        favorite:  false,
        id:        "TEST_ID3",
        message,
    },
    {
        completed: false,
        created:   "2019-03-20T22:02:32.687Z",
        favorite:  false,
        id:        "TEST_ID4",
        message,
    },
    {
        completed: false,
        created:   "2019-03-20T22:02:32.687Z",
        favorite:  true,
        id:        "TEST_ID5",
        message,
    }
];

const responseDataListSuccess = {
    data:    tasks,
    message: successMessage,
};

const responseDataSuccess = {
    data:    task,
    message: successMessage,
};

const responseDataSuccessUpdate = {
    data:    [task],
    message: successMessage,
};

const responseDataFail = {
    message: errorMessage,
};

const fetchResponseSuccess = {
    status: 200,
    json:   jest.fn(() => Promise.resolve(responseDataSuccess)),
};

const fetchResponseSuccessUpdate = {
    status: 200,
    json:   jest.fn(() => Promise.resolve(responseDataSuccessUpdate)),
};

const fetchResponseListSuccess = {
    status: 200,
    json:   jest.fn(() => Promise.resolve(responseDataListSuccess)),
};

const fetchResponseSuccess204 = {
    status: 204,
};

const fetchResponseFail401 = {
    status: 401,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const fetchResponseFail400 = {
    status: 400,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

global.__ = {
    errorMessage,
    token,
    error,
    meta,
    newTask,
    task,
    taskId,
    tasks,
    responseDataSuccess,
    responseDataSuccessUpdate,
    responseDataListSuccess,
    responseDataFail,
    fetchResponseSuccess,
    fetchResponseSuccessUpdate,
    fetchResponseListSuccess,
    fetchResponseSuccess204,
    fetchResponseFail400,
    fetchResponseFail401,
};

global.fetch = fetch;
global.localStorage = new LocalStorage();

global.__ENV__ = global.__PROD__ = process.env.NODE_ENV;
