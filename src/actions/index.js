import * as types from './../constans/ActionTypes';

export const listAll = () => {
	return {
		type:types.LIST_ALL
	}
}

export const addTask = task => {
	return {
		type: types.ADD_TASK,
		task
	}
}

export const toggleForm = task => {
	return {
		type: types.TOGGLE_FORM,
	}
}

export const openForm = task => {
	return {
		type: types.OPEN_FORM,
	}
}

export const closeForm = task => {
	return {
		type: types.CLOSE_FORM,
	}
}