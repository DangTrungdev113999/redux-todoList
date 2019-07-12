import * as types from './../constans/ActionTypes';

let initialState = {
	id: '',
	name: '',
	status: false
};

const myReduder = ( state = initialState, action ) => {
	switch(action.type) {
		case types.EDIT_ITEM:
			return action.task;
		case types.CLEAR_FORM: 
			return initialState;
		default: return state;
	}
}

export default myReduder;
