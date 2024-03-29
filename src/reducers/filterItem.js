import * as types from './../constans/ActionTypes';

let initialState = {
	name: '',
	status: -1
};

const myReduder = ( state = initialState, action ) => {
	switch(action.type) {
		case types.FILTER_ITEM:
			return {
				name: action.name,
				status: action.status
			}
		default: return state;
	}
}

export default myReduder;
