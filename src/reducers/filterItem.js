import * as types from './../constans/ActionTypes';

let initialState = {
	filterName: '',
	filterStatus: -1
};

const myReduder = ( state = initialState, action ) => {
	switch(action.type) {
		case types.FILTER_ITEM:
			console.log(action);
		default: return state;
	}
}

export default myReduder;
