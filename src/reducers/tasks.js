import * as types from './../constans/ActionTypes';

const data = JSON.parse(localStorage.getItem('tasks'));
let initialState =data ? data : [];

const myReduder = ( state = initialState, action ) => {
	switch(action) {
		case types.LIST_ALL:
			return state;
		default: return state;
	}
}

export default myReduder;
