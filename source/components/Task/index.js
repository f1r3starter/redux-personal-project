// Core
import React, { Component } from "react";
import cx from "classnames";
import { Control } from "react-redux-form";

// Instruments
import Styles from "./styles.m.css";

// Components
import Checkbox from "../../theme/assets/Checkbox";
import Remove from "../../theme/assets/Remove";
import Edit from "../../theme/assets/Edit";
import Star from "../../theme/assets/Star";

export default class Task extends Component {
    _toggleCompleteTask = () => {
        const { toggleCompleteTaskAsync } = this.props;

        toggleCompleteTaskAsync({ ...this.props });
    };

    _toggleFavoriteTask = () => {
        const { toggleFavoriteTaskAsync } = this.props;

        toggleFavoriteTaskAsync({ ...this.props });
    };

    _toggleFocusTask = () => {
        const {
            toggleFocusTask,
            id,
            clearMessage,
            message,
            fillNewMessage,
            focusTask,
        } = this.props;

        focusTask ? clearMessage() : fillNewMessage(message);
        toggleFocusTask(id);
    };

    _removeTask = () => {
        const { removeTaskAsync, id } = this.props;

        removeTaskAsync(id);
    };

    _changeHandler = (event) => {
        const { fillNewMessage } = this.props;

        fillNewMessage(event.target.value);
    };

    _keyHandler = (event) => {
        const key = event.key;

        const keyActions = {
            Enter: () => {
                const { updateTaskAsync, newMessageText } = this.props;

                event.preventDefault();
                if (newMessageText) {
                    updateTaskAsync({ ...this.props, message: newMessageText });
                    this._toggleFocusTask();
                }
            },
            Esc: () => {
                event.preventDefault();
                this._toggleFocusTask();
            },
        };

        keyActions[key] ? keyActions[key]() : null;
    };

    render () {
        const { message, completed, favorite, focusTask } = this.props;

        const styles = cx(Styles.task, {
            [Styles.completed]: completed,
        });

        return (
            <li className = { styles }>
                <div className = { Styles.content }>
                    <Checkbox
                        inlineBlock
                        checked = { completed }
                        className = { Styles.toggleTaskCompletedState }
                        color1 = '#3B8EF3'
                        color2 = '#FFF'
                        onClick = { this._toggleCompleteTask }
                    />
                    <input
                        autoFocus = { focusTask }
                        defaultValue = { message }
                        disabled = { !focusTask }
                        key = { focusTask }
                        maxLength = { 50 }
                        type = 'text'
                        onChange = { this._changeHandler }
                        onKeyPress = { this._keyHandler }
                    />
                </div>
                <div className = { Styles.actions }>
                    <Star
                        inlineBlock
                        checked = { favorite }
                        className = { Styles.toggleTaskFavoriteState }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { this._toggleFavoriteTask }
                    />
                    <Edit
                        inlineBlock
                        checked = { false }
                        className = { Styles.updateTaskMessageOnClick }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { this._toggleFocusTask }
                    />
                    <Remove
                        inlineBlock
                        className = { Styles.removeTask }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { this._removeTask }
                    />
                </div>
            </li>
        );
    }
}
