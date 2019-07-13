import * as types from './../constans/ActionTypes';

export const listAll = () => {
	return {
		type:types.LIST_ALL
	}
}

export const saveItem = task => {
	return {
		type: types.SAVE_ITEM,
		task
	}
}

export const toggleForm = () => {
	return {
		type: types.TOGGLE_FORM,
	}
}

export const openForm = () => {
	return {
		type: types.OPEN_FORM,
	}
}

export const closeForm = () => {
	return {
		type: types.CLOSE_FORM,
	}
}

export const updateStatusItem = id => {
	return {
		type: types.UPDATE_STATUS_ITEM,
		id
	}
}

export const deleteItem = id => {
	return {
		type: types.DELETE_ITEM,
		id
	}
}

export const editItem = task => {
	return {
		type: types.EDIT_ITEM,
		task
	}
}

export const clearForm = () => {
	return {
		type: types.CLEAR_FORM
	}
}

export const fiterItem = (name, status) => {
	return {
		type: types.FILTER_ITEM,
		name, 
		status
	}
}

export const searchItem = (keyword) => {
	return {
		type: types.SEARCH,
		keyword
	}
}

export const sortItem = (sort) => {
	return {
		type: types.SORT,
		sort
	}
}