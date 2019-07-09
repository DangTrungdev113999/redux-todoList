import { combineReducers } from 'redux';
import tasks from './tasks';

console.log(tasks);
const myReducer = combineReducers({
	tasks
});

export default myReducer;