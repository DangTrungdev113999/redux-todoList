import * as types from './../constans/ActionTypes';

let initialState = {
	by: 'name',
	value: 0
};

const myReduder = ( state = initialState, action ) => {
	switch(action.type) {
		case types.SORT:
			return action.sort;
		default: return state;
	}
}

export default myReduder;
