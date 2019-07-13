import * as types from './../constans/ActionTypes';

let initialState = '';

const myReduder = ( state = initialState, action ) => {
	switch(action.type) {
		case types.SEARCH:
			return action.keyword;
		default: return state;
	}
}

export default myReduder;
