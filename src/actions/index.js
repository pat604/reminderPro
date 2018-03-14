import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

// redux action creator
export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER, 
        text,                    // ES6 miatt nem kell a text: text
        dueDate
    }
    console.log('addReminder action', action);
    return action;
};

 export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    }
    console.log('deleting in actions', action);
    return action;
 }

 export const clearReminders = () => {
    return {
        type: CLEAR_REMINDERS
    }
 }