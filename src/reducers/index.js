import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import itemEditting from './itemEditting';
import filterItem from './filterItem';

const myReducer = combineReducers({
	tasks,
	isDisplayForm,
	itemEditting,
	filterItem

});

export default myReducer;