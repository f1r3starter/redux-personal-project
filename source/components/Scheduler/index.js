// Core
import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Form, Control } from "react-redux-form";
import FlipMove from "react-flip-move";

// Instruments
import Styles from "./styles.m.css";

// Components
import Task from "../Task";
import Checkbox from "../../theme/assets/Checkbox";
import { tasksActions } from "../../bus/tasks/actions";
import { schedulerActions } from "../../bus/scheduler/actions";

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.toJS(),
        newMessageText: state.scheduler.get("newMessageText"),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(
            { ...tasksActions, ...schedulerActions },
            dispatch
        ),
    };
};

@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class Scheduler extends Component {
    componentDidMount() {
        const { actions } = this.props;

        actions.fetchTasksAsync();
    }

    taskForm = createRef();

    _submitForm = (formData) => {
        console.log(formData);
        this._createTask(formData);
    };

    _createTask = ({ newTask }) => {
        if (!newTask) {
            return null;
        }

        const { actions } = this.props;

        actions.createTaskAsync(newTask);
    };

    _submitFormOnEnter = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();

            this.taskForm.current.submit();
        }
    };

    _searchTasks = (event) => {
        const { actions } = this.props;
        const query = event.target.value;

        query ? actions.searchTasks(query) : actions.fetchTasksAsync();
    };

    render() {
        const { actions, tasks, newMessageText } = this.props;
        const todoList = tasks.map((task) => (
            <Task
                completed={task.completed}
                favorite={task.favorite}
                id={task.id}
                key={task.id}
                message={task.message}
                newMessageText={newMessageText}
                {...task}
                {...actions}
            />
        ));

        return (
            <section className={Styles.scheduler}>
                <main>
                    <header>
                        <h1>Планировщик задач</h1>
                        <input
                            placeholder="Поиск"
                            type="search"
                            onChange={this._searchTasks}
                        />
                    </header>
                    <section>
                        <Form
                            ref={this.taskForm}
                            onSubmit={this._submitForm}
                            model="forms.scheduler.task">
                            <Control.text
                                model="forms.scheduler.task.newTask"
                                className={Styles.createTask}
                                maxLength={50}
                                placeholder="Описание моей новой задачи"
                                type="text"
                                name="newTask"
                                onKeyPress={this._submitFormOnEnter}
                            />
                            <button type="submit">Добавить задачу</button>
                        </Form>
                        <div className={Styles.overlay}>
                            <ul>
                                <FlipMove>{todoList}</FlipMove>
                            </ul>
                        </div>
                    </section>
                    <footer>
                        <Checkbox checked color1="#363636" color2="#fff" />
                        <span className={Styles.completeAllTasks}>
                            Все задачи выполнены
                        </span>
                    </footer>
                </main>
            </section>
        );
    }
}
